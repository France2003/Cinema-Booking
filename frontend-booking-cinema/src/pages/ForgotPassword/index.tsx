import { useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { useParams, useNavigate, Link } from "react-router-dom";
import { forgotPassword, resetPassword } from "../../services/authLogin/authLogin";
import AuthLayout from "../../components/AuthLayout";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import ImgBackground from "../../assets/img/bgrimg.jpg";
function ForgotPassword() {
    const { token } = useParams(); // lấy token từ URL nếu có
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    // Gửi mail reset mật khẩu
    const handleForgot = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await forgotPassword(email);
            toast.success(res.message || "Vui lòng kiểm tra email của bạn!");
            setEmail("");
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Có lỗi xảy ra!");
        } finally {
            setIsLoading(false);
        }
    };
    // Đặt lại mật khẩu
    const handleReset = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirm) {
            toast.error("Mật khẩu nhập lại không khớp!");
            return;
        }
        setIsLoading(true);
        try {
            const res = await resetPassword(token as string, password);
            toast.success(res.message || "Đặt lại mật khẩu thành công!");
            navigate("/login");
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Có lỗi xảy ra!");
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="forgot-password min-h-screen flex items-center justify-center bg-gray-900 text-black">
            <Helmet>
                <title>{token ? "Đặt lại mật khẩu" : "Quên mật khẩu"} | Booking Cinema</title>
            </Helmet>
            <AuthLayout rightBgUrl={ImgBackground}>
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                    <h1
                        className="text-4xl font-extrabold text-center mb-6 
                       bg-gradient-to-r from-pink-500 via-yellow-400 to-red-500 
                       bg-clip-text text-transparent tracking-wide"
                    >
                        {token ? "Đặt lại mật khẩu 🔐" : "Quên mật khẩu 🔑"}
                    </h1>
                    {!token ? (
                        // Form Quên mật khẩu
                        <form onSubmit={handleForgot} className="flex flex-col gap-4">
                            <FormInput
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Nhập email của bạn"
                            />
                            <Button
                                text="Gửi liên kết đặt lại mật khẩu"
                                loading={isLoading}
                                type="submit"
                            />
                            <Link
                                to="/login"
                                className="text-sm text-blue-500 hover:underline text-center"
                            >
                                Quay lại trang đăng nhập
                            </Link>
                        </form>
                    ) : (
                        // Form Reset mật khẩu
                        <form onSubmit={handleReset} className="flex flex-col gap-4">
                            <FormInput
                                label="Mật khẩu mới"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Nhập mật khẩu mới"
                                showToggle={true}
                            />
                            <FormInput
                                label="Xác nhận mật khẩu"
                                type="password"
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
                                placeholder="Nhập lại mật khẩu"
                                showToggle={true} 
                            />
                            <Button
                                text="Đặt lại mật khẩu"
                                loading={isLoading}
                                type="submit"
                            />
                            <Link
                                to="/login"
                                className="text-sm text-blue-500 hover:underline text-center"
                            >
                                Quay lại trang đăng nhập
                            </Link>
                        </form>
                    )}
                </div>
            </AuthLayout>
        </div>
    );
}

export default ForgotPassword;
