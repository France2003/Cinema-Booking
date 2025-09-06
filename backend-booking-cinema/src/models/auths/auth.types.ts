//Nơi khai báo interface hoặc type.

import { Document, Types } from "mongoose";
export interface IUser extends Document {
    _id: Types.ObjectId;
    email: string;
    phone: string;
    password: string;
    role: "user" | "admin";
}
export interface RegisterDTO {
    email: string;
    phone: string;
    password: string;
}
export interface LoginDTO {
    email: string;
    password: string;
}
export interface TokenPayload {
    id: string;
    role: string;
}
