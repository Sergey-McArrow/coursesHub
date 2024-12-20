import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

let dbConnection = null

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Successfully connected to MongoDB!');
    dbConnection = mongoose.connection;
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    throw error;
  }
}

export const getDB = () => {
  if (!dbConnection) throw new Error('Database not connected')
  return dbConnection;
}
