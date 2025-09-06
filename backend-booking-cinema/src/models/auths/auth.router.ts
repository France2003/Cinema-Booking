import { Router } from "express";
import { registerUser, loginUser, Admin } from "../auths/auth.controller";
const router = Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/create-admin", Admin);
export default router;
