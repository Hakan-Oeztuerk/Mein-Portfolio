import { createContext, useReducer, useEffect } from "react";
import { themeReducer, initialThemeState } from "../schemas/themeReducer";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, initialThemeState);

    useEffect(() => {
        if (state.mode === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [state.mode]);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
}
