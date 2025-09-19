import { Router } from "express";
import { registerUser, loginUser, Admin,forgotPassword, resetPassword  } from "../auths/auth.controller";
const router = Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/create-admin", Admin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
export default router;
