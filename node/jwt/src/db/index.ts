import { MongoClient } from "mongodb"
import "dotenv/config"
import mongoose from "mongoose"

const uri = process.env.MONGO_URI

export const connectDB = async () => {
  try {
    if (!uri) {
      throw new Error("MONGO_URI is not defined. Check your .env file")
    }
    await mongoose.connect(uri)
    console.log("Connected to MongoDB")
  } catch (error) {
    console.error("Failed to connect to MongoDB", error)
  }
}
