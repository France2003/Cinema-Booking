import dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";
import cors from "cors";
import { connectMongoDB } from "./config/db";
import { ENV } from "./config/env";
import authRouter from "./models/auths/auth.router";
const app: Application = express();
app.use(cors({
  origin: ENV.FRONTEND_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());
app.use("/api/auth", authRouter);
connectMongoDB();
app.listen(ENV.PORT, () => {
  console.log(`Server is running on port: ${ENV.PORT}`);
  console.log("ENV.FRONTEND_URL:", ENV.FRONTEND_URL);

});
