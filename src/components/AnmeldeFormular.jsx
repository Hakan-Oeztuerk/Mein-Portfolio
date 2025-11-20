import { useState } from "react";

export default function AnmeldeFormular () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function submitHandler(e) {
        e.preventDefault();

        const credentials = { email, password };
        console.log(credentials);


        const correctEmail = "hakan.oeztuerk82@gmail.com";
        const correctPassword = "123456";

        if (email === correctEmail && password === correctPassword) {
            setIsLoggedIn(true);


            setEmail("");
            setPassword("");
        } else {
            alert("Login fehlgeschlagen!");
        }
    }

    if (isLoggedIn) {
        return <h2>User ist angemeldet ✔</h2>;
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Login</button>
        </form>
    );
}
