export default function TextAreaField({ label, register, error }) {
    return (
        <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-white/65">
                {label}
            </label>
            <textarea
                {...register}
                rows="5"
                className={`w-full rounded-2xl border bg-white/[0.03] px-4 py-3 text-white outline-none transition ${
                    error
                        ? "border-red-500/70 focus:border-red-400"
                        : "border-white/15 focus:border-white/35"
                }`}
            />
            {error && <p className="mt-1 text-sm text-red-400">{error.message}</p>}
        </div>
    );
}
