import { createServer } from "http";
import { appendFile } from "fs";

const port = 3000;

const server = createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  switch (req.method) {
    case "PUT":
      res.statusCode = 200;
      res.end("PUT");
      break;

    case "DELETE":
      res.statusCode = 200;
      res.end("DELETE");
      break;

    default:
      try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
          res.statusCode = 401;
          throw new Error("Unauthorized");
        } else {
          res.statusCode = 200;
          res.end("Authorization header received");
        }
      } catch (error) {
        const errorLog = `${new Date().toLocaleDateString()} - Error: ${
          error.message
        }\n`;
        appendFile("errors.log", errorLog, (err) => {
          if (err) {
            console.error("Error writing to log file:", err);
          }
        });
        res.statusCode = 500;
        res.end("Internal Server Error");
      }
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
