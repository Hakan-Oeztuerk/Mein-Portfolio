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
        formState: { errors, isValid }
    } = useForm({
        resolver: yupResolver(contactSchema),
        mode: "onChange"
    });

    const onSubmit = (data) => {
        dispatch({ type: "submitSuccess" });
        reset();
        setTimeout(() => dispatch({ type: "hideSuccess" }), 3000);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-3 text-center">Lass uns digitale Lösungen schaffen.</h1>
            <p className="text-2xl mx-auto text-center">Schreib mir oder lass uns gemeinsam Ideen entwickeln.</p>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="max-w-lg mx-auto p-8 outline mt-10 shadow-xl rounded-2xl relative"
            >
                <h2 className="text-2xl font-semibold text-center mb-6">Kontakt</h2>

                <AnimatePresence>
                    {state.showSuccess && (
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

                    <InputField
                        label="Benutzername"
                        register={register("username")}
                        error={errors.username}
                    />

                    <InputField
                        label="E-Mail"
                        register={register("email")}
                        error={errors.email}
                    />

                    <InputField
                        label="Telefonnummer"
                        register={register("phone")}
                        error={errors.phone}
                    />

                    <TextAreaField
                        label="Nachricht"
                        register={register("message")}
                        error={errors.message}
                    />

                    <motion.button
                        type="submit"
                        disabled={!isValid}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-xl text-black text-lg shadow-md transition ${
                            isValid ? "bg-cyan-700 hover:bg-cyan-400" : "bg-gray-400 cursor-not-allowed"
                        }`}
                    >
                        Abschicken
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
}
