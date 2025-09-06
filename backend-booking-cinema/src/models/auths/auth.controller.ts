//Lấy dữ liệu từ req.body

import { Request, Response } from "express";
import * as AuthService from "../auths/auth.service";
import { successResponse, errorResponse } from "../../utils/response";
import bcrypt from "bcryptjs";
import { UserModel } from "./auth.model";
export const registerUser = async (req: Request, res: Response) => {
    try {
        const user = await AuthService.register(req.body);
        successResponse(res, { user }, "Người dùng đã đăng ký thành công");
    } catch (err: any) {
        errorResponse(res, err.message);
    }
};
export const loginUser = async (req: Request, res: Response) => {
    try {
        const result = await AuthService.login(req.body);
        successResponse(res, result, "Đăng nhập thành công");
    } catch (err: any) {
        errorResponse(res, err.message, 401);
    }
};
///Admin
export const Admin = async (req: Request, res: Response):Promise<void> => {
    try {
        // Kiểm tra xem admin đã tồn tại chưa
        const existingAdmin = await UserModel.findOne({ role: "admin" });
        if (existingAdmin) {
            res.status(400).json({ message: "Admin đã tồn tại!" });
            return;
        }
        const hashedPassword = await bcrypt.hash("admin123", 10);
        const admin = new UserModel({
            email: "admin@cinema.com",
            phone: "0000000000",
            password: hashedPassword,
            role: "admin",
        });
        await admin.save();
        res.json({ message: "Quản trị viên đã tạo thành công", admin });
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Lỗi máy chủ nội bộ" });
    }
};

