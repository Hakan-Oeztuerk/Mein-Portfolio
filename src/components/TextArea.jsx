 export default function TextAreaField({ label, register, error }) {
    return (
        <div>
            <label className="font-semibold">{label}</label>
            <textarea
                {...register}
                rows="4"
                className={`border p-3 mt-1 rounded-xl w-full focus:border-cyan-600 outline-none ${
                    error ? "border-red-500 animate-pulse" : ""
                }`}
            />
            {error && <p className="text-red-600 text-sm mt-1">{error.message}</p>}
        </div>
    );
}
