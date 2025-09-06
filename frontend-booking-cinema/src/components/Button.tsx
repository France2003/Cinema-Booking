interface ButtonProps {
    text: string;
    loading?: boolean;
    onClick?: () => void;
    type?: "button" | "submit";
}
function Button({ text, loading, type = "button", onClick }: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center"
        >
            {loading ? (
                <svg className="animate-spin h-5 w-5 mr-2 border-t-2 border-white rounded-full" viewBox="0 0 24 24" />
            ) : (
                text
            )}
        </button>
    );
}
export default Button;
