import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ContactForm () {
  const [showSuccess, setShowSuccess] = useState(false);

  const schema = Yup.object().shape({
    username: Yup.string()
      .matches(/^[A-Za-z0-9]{3,10}$/, "3–10 Zeichen, Buchstaben & Zahlen")
      .required("Bitte eingeben"),
    email: Yup.string()
      .email("Ungültige E-Mail")
      .required("Bitte eingeben"),
    phone: Yup.string()
      .matches(/^[0-9+\-\s]{6,15}$/, "Nur Zahlen, +, -, Leerzeichen")
      .required("Bitte eingeben"),
    message: Yup.string()
      .min(10, "Mindestens 10 Zeichen")
      .required("Bitte Nachricht eingeben"),
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-lg mx-auto p-8 outline  mt-30 shadow-xl rounded-2xl relative"
    >
      <h1 className="text-3xl font-bold text-center mb-6">Kontakt</h1>

    
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

      <Formik
        initialValues={{ username: "", email: "", phone: "", message: "" }}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          setShowSuccess(true);
          resetForm();
          setTimeout(() => setShowSuccess(false), 4000);
        }}
      >
        {({ isValid, errors, touched }) => (
          <Form className="flex flex-col gap-5">

            <div>
              <label className="font-semibold">Benutzername</label>
              <Field
                name="username"
                className={`border p-3 mt-1 rounded-xl w-full outline-none focus:border-cyan-600
                  ${errors.username && touched.username ? "border-red-500 animate-pulse" : ""}
                `}
                placeholder="z. B. Max123"
              />
              <ErrorMessage
                name="username"
                component="p"
                className="text-red-600 text-sm mt-1"
              />
            </div>

          
            <div>
              <label className="font-semibold">E-Mail</label>
              <Field
                name="email"
                type="email"
                className={`border p-3 mt-1 rounded-xl w-full outline-none focus:border-cyan-600
                  ${errors.email && touched.email ? "border-red-500 animate-pulse" : ""}
                `}
                placeholder="z. B. max@mail.de"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-600 text-sm mt-1"
              />
            </div>

         
            <div>
              <label className="font-semibold">Telefonnummer</label>
              <Field
                name="phone"
                className={`border p-3 mt-1 rounded-xl w-full outline-none focus:border-cyan-600
                  ${errors.phone && touched.phone ? "border-red-500 animate-pulse" : ""}
                `}
                placeholder="z. B. +49 123 456789"
              />
              <ErrorMessage
                name="phone"
                component="p"
                className="text-red-600 text-sm mt-1"
              />
            </div>

        

            <div>
              <label className="font-semibold">Nachricht</label>
              <Field
                as="textarea"
                name="message"
                rows={4}
                className={`border p-3 mt-1 rounded-xl w-full outline-none focus:border-cyan-600
                  ${errors.message && touched.message ? "border-red-500 animate-pulse" : ""}
                `}
                placeholder="Deine Nachricht..."
              />
              <ErrorMessage
                name="message"
                component="p"
                className="text-red-600 text-sm mt-1"
              />
            </div>

       
            <motion.button
              type="submit"
              disabled={!isValid}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-xl text-black text-lg shadow-md transition
                ${isValid ? "bg-cyan-400 hover:bg-cyan-900" : "bg-gray-400 cursor-not-allowed"}
              `}
            >
              Abschicken
            </motion.button>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
}
