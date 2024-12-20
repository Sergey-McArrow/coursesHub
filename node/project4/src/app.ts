import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import authRoutes from "./routes/auth";
import taskRoutes from "./routes/task";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "uri";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () =>
      console.log(`Server is running on http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.error(error);
  });

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
