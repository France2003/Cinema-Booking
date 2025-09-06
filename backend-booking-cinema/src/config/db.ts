import mongoose from "mongoose";
import { ENV } from "./env";

export const connectMongoDB = async (): Promise<void> => {
  try {
    await mongoose.connect(ENV.MONGO_DB);
    console.log("Connected to MongoDB:", ENV.MONGO_DB);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); 
  }
};
