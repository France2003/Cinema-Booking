import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../services/authLogin/authLogin";
import AuthForm from "../../components/auth/AuthForm";
import AuthLayout from "../../components/AuthLayout";
import ImgBackground from "../../assets/img/bgrimg.jpg";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const data = await loginUser({ email, password });
            if (data.user.role === "admin") {
                toast.success("Đã đăng nhập thành công vào trang quản trị!");
                setTimeout(() => {
                    navigate("/admin");
                }, 1500);
            } else {
                toast.success("Đăng nhập thành công!");
                setTimeout(() => {
                    navigate("/");
                }, 1500);
            }
        } catch (error: any) {
            const msg =
                error.response?.data?.message || error.message || "Đăng nhập thất bại";
            toast.error(msg);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="login min-h-screen flex items-center justify-center bg-gray-900 text-black">
            <Helmet>
                <title>Đăng Nhập | Booking Cinema</title>
            </Helmet>
            <AuthLayout rightBgUrl={ImgBackground}>
                <AuthForm
                    type="login"
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    isLoading={isLoading}
                    onSubmit={handleLogin}
                />
            </AuthLayout>
        </div>
    );
}
export default Login;
