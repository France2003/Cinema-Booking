import { Link } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";
import FormInput from "../FormInput";
import Button from "../Button";
// import Divider from "../Divider";

interface AuthFormProps {
    type: "login" | "register";
    email: string;
    setEmail: (val: string) => void;
    password: string;
    setPassword: (val: string) => void;
    phone?: string;
    setPhone?: (val: string) => void;
    isLoading: boolean;
    onSubmit: (e: React.FormEvent) => void;
}

const AuthForm = ({
    type,
    email,
    setEmail,
    password,
    setPassword,
    phone,
    setPhone,
    isLoading,
    onSubmit,
}: AuthFormProps) => {
    const isLogin = type === "login";

    return (
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center justify-center mb-6">
                <h1
                    className="text-5xl font-extrabold text-center 
                     bg-gradient-to-r from-pink-500 via-yellow-400 to-red-500 
                     bg-clip-text text-transparent tracking-wide"
                >
                    Booking Cinema 🎬
                </h1>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-center">
                {isLogin ? "Đăng nhập" : "Đăng ký"}
            </h2>
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
                {!isLogin && setPhone && (
                    <FormInput
                        label="Số điện thoại"
                        type="text"
                        value={phone || ""}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Nhập số điện thoại của bạn"
                    />
                )}

                <FormInput
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email của bạn"
                />

                <FormInput
                    label="Mật khẩu"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    showToggle={true}
                    placeholder="Nhập mật khẩu của bạn"
                />

                <Button
                    text={isLogin ? "Đăng nhập" : "Đăng ký"}
                    loading={isLoading}
                    type="submit"
                />
            </form>
            {isLogin && (
                <div className="text-right mt-2">
                    <Link
                        to="/forgot-password"
                        className="text-sm text-blue-500 hover:text-blue-400"
                    >
                        Quên mật khẩu?
                    </Link>
                </div>
            )}
            {/* <Divider text="Hoặc đăng nhập/đăng ký với" /> */}
            <p className="mt-4 text-center">
                {isLogin ? (
                    <>
                        Chưa có tài khoản?{" "}
                        <Link to="/register" className="text-blue-500 hover:text-blue-400">
                            Đăng ký
                        </Link>
                    </>
                ) : (
                    <>
                        Đã có tài khoản?{" "}
                        <Link to="/login" className="text-blue-500 hover:text-blue-400">
                            Đăng nhập
                        </Link>
                    </>
                )}
            </p>
        </div>
    );
};

export default AuthForm;
