import type { RegisterDTO } from "../../types/auth/auth";
import api from "../api";
export const registerUser = (data: RegisterDTO) => {
    return api.post("/api/auth/register", data);
};
