import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

interface FormInputProps {
    label: string;
    type?: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    showToggle?: boolean;
}
function FormInput({ label, type = "text", value, onChange, placeholder, showToggle }: FormInputProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-2">{label}</label>
            <input
                className=" w-full px-3 py-2 border border-gray-300 rounded-sm 
                          bg-white
                            shadow-sm
                            focus:outline-none 
                            focus:ring-2 
                          focus:ring-indigo-400 
                          focus:border-indigo-400 
                            transition duration-200
                            pr-10"
                type={showToggle ? (showPassword ? "text" : "password") : type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            {showToggle && (
                <div
                    className="absolute inset-y-0 top-[30px] right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
            )}
        </div>
    );
}
export default FormInput;
