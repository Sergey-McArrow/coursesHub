import express, { Express, Request, Response } from "express";
import { config } from "dotenv";
import cors from "cors";

config();
const port = process.env.PORT || 1234;

const app: Express = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello from TypeScript Express Server!" });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
