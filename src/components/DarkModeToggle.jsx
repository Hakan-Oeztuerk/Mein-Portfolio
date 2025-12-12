import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext.jsx";

export default function DarkModeToggle() {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <button
      onClick={() => dispatch({ type: "toggleTheme" })}
      className="p-2 rounded-lg text-black dark:text-white transition ml-4"
    >
      {state.mode === "dark" ? "🌙" : "☀️"}
    </button>
  );
}

