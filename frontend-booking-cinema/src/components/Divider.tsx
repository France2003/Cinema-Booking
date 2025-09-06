function Divider({ text }: { text: string }) {
    return (
        <div className="flex w-full justify-between items-center mt-4">
            <hr className="border border-gray-400 w-[80px]" />
            <p className="text-sm">{text}</p>
            <hr className="border border-gray-400 w-[80px]" />
        </div>
    );
}
export default Divider;
