import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import contactSchema from "../schemas/ContacSchema";
import { motion, AnimatePresence } from "framer-motion";
import { useReducer } from "react";
import { contactReducer, initialState } from "../schemas/contactReducer";
import InputField from "./Input.jsx";
import TextAreaField from "./TextArea.jsx";

export default function ContactForm() {
    const [state, dispatch] = useReducer(contactReducer, initialState);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(contactSchema),
        mode: "onChange",
    });

    const onSubmit = () => {
        dispatch({ type: "submitSuccess" });
        reset();
        setTimeout(() => dispatch({ type: "hideSuccess" }), 3000);
    };

    return (
        <section className="px-3 pb-20">
            <div className="polo-container">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/55">Kontakt</p>
                    <p className="polo-muted mt-3 text-lg md:text-xl">
                        Interesse an einem Kennenlerngespräch? Ich freue mich über eine Nachricht zu deiner Position.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="polo-panel polo-card-shadow relative mx-auto mt-10 max-w-2xl p-6 md:p-8"
                >
                    <AnimatePresence>
                        {state.showSuccess && (
                            <motion.div
                                initial={{ opacity: 0, y: -16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -16 }}
                                className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full border border-white/20 bg-[#111] px-4 py-2 text-sm text-white"
                            >
                                Nachricht erfolgreich gesendet.
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-3 flex flex-col gap-5">
                        <InputField label="Name" register={register("username")} error={errors.username} />
                        <InputField label="E-Mail" register={register("email")} error={errors.email} />
                        <InputField label="Telefon" register={register("phone")} error={errors.phone} />
                        <TextAreaField label="Nachricht" register={register("message")} error={errors.message} />

                        <motion.button
                            type="submit"
                            disabled={!isValid}
                            whileTap={{ scale: 0.98 }}
                            className={`mt-2 rounded-2xl px-5 py-3 text-base font-semibold uppercase tracking-[0.08em] transition ${
                                isValid
                                    ? "border border-white/28 bg-white/8 text-white hover:bg-white/15"
                                    : "cursor-not-allowed border border-white/10 bg-white/20 text-white/55"
                            }`}
                        >
                            Nachricht senden
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
