import * as yup from "yup";

  export default yup.object({

  username: yup
    .string()
    .matches(/^[A-Za-z0-9]{3,10}$/, "3–10 Zeichen, Buchstaben & Zahlen")
    .required("Bitte eingeben"),

  email: yup
    .string()
    .email("Ungültige E-Mail")
    .required("Bitte eingeben"),

  phone: yup
    .string()
    .matches(/^[0-9+\-\s]{6,15}$/, "Nur Zahlen, +, -, Leerzeichen")
    .required("Bitte eingeben"),

  message: yup
    .string()
    .min(10, "Mindestens 10 Zeichen")
    .required("Bitte Nachricht eingeben"),
});


