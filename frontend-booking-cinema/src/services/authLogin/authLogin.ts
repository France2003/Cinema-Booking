import type { LoginDTO, LoginResponse } from "../../types/authLogin/authLogin";
import api from "../api";
export const loginUser = async (data: LoginDTO) => {
    const response = await api.post<LoginResponse>("/api/auth/login", data, {
        withCredentials: true,
    });
    return response.data;
};
export const refreshToken = async (refreshToken: string) => {
    const response = await api.post("/api/auth/refresh-token", {
        refreshToken,
    });
    return response.data;
};
