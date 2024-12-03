import { MongoClient } from "mongodb";
import "dotenv/config";
import mongoose from "mongoose";

const uri = process.env.MONGO_URI;

let db = null;

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}

function getDB() {
  if (!db) {
    throw new Error("Database not connected");
  }
  return db;
}

export { connectDB, getDB };
