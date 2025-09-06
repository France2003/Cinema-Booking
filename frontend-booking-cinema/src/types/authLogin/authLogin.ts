export interface LoginDTO {
    email: string;
    password: string;
}
export interface LoginResponse {
    token: string;
    refreshToken?: string;
    user: {
        role?: string;
        email: string;
        phone?: string;
    };
}