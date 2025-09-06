import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
export interface AuthRequest extends Request {
    user?: { id: string; role: string };
}
export const requireAuth = (req: AuthRequest, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    if (!header || !header.startsWith("Bearer ")) {
        return res.status(403).json({ message: "No token provided" });
    }

    const token = header.split(" ")[1];
    if (!token) {
        return res.status(403).json({ message: "Token missing" });
    }

    try {
        const decoded = verifyToken(token) as { id: string; role: string };
        req.user = decoded;
        next();
    } catch (err) {
        console.error("Invalid token:", err);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};
export const isAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
    if (req.user?.role !== "admin") {
        return res.status(403).json({ message: "Admins only" });
    }
    next();
};
