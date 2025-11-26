import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import contactSchema from "../schemas/ContacSchema";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
    const [showSuccess, setShowSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid }
    } = useForm({
        resolver: yupResolver(contactSchema),
        mode: "onChange"
    });

    const onSubmit = (data) => {
        console.log("Form values:", data);
        setShowSuccess(true);
        reset();
        setTimeout(() => setShowSuccess(false), 3000);
    };

    return (
        <>
            <h1 className="text-3xl font-bold mb-3 ml-40">Lass uns digitale Lösungen schaffen.</h1>
            <p className="ml-40 text-2xl">Schreib mir oder lass uns gemeinsam Ideen entwickeln, ich freue mich auf spannende Projekte.</p>
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-lg mx-auto p-8 outline mt-10 shadow-xl rounded-2xl relative"
        >
            <h2 className="text-2xl font-semibold text-center mb-6">Kontakt</h2>

            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-4 left-1/2 -translate-x-1/2 bg-green-100 text-green-700 px-6 py-3 rounded-xl shadow-lg z-10"
                    >
                        Nachricht erfolgreich gesendet! ✔️
                    </motion.div>
                )}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">


                <div>
                    <label className="font-semibold">Benutzername</label>
                    <input
                        {...register("username")}
                        className={`border p-3 mt-1 rounded-xl w-full focus:border-cyan-600 outline-none ${errors.username ? "border-red-500 animate-pulse" : ""
                            }`}
                        placeholder=""
                    />
                    {errors.username && (
                        <p className="text-red-600 text-sm mt-1">{errors.username.message}</p>
                    )}
                </div>


                <div>
                    <label className="font-semibold">E-Mail</label>
                    <input
                        {...register("email")}
                        className={`border p-3 mt-1 rounded-xl w-full focus:border-cyan-600 outline-none ${errors.email ? "border-red-500 animate-pulse" : ""
                            }`}
                        placeholder=""
                    />
                    {errors.email && (
                        <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label className="font-semibold">Telefonnummer</label>
                    <input
                        {...register("phone")}
                        className={`border p-3 mt-1 rounded-xl w-full focus:border-cyan-600 outline-none ${errors.phone ? "border-red-500 animate-pulse" : ""
                            }`}
                        placeholder=""
                    />
                    {errors.phone && (
                        <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                    )}
                </div>


                <div>
                    <label className="font-semibold">Nachricht</label>
                    <textarea
                        {...register("message")}
                        rows="4"
                        className={`border p-3 mt-1 rounded-xl w-full focus:border-cyan-600 outline-none ${errors.message ? "border-red-500 animate-pulse" : ""
                            }`}
                        placeholder="Deine Nachricht..."
                    ></textarea>
                    {errors.message && (
                        <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                    )}
                </div>


                <motion.button
                    type="submit"
                    disabled={!isValid}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl text-black text-lg shadow-md transition ${isValid ? "bg-cyan-700 hover:bg-cyan-400" : "bg-gray-400 cursor-not-allowed"
                        }`}
                >
                    Abschicken
                </motion.button>
            </form>
        </motion.div>
        </>
    );
}

