export const initialThemeState = {
    mode: typeof window !== "undefined" && localStorage.getItem("theme") === "dark" ? "dark" : "light"
};

export function themeReducer(state, action) {
    switch (action.type) {
        case "toggleTheme":
            return { ...state, mode: state.mode === "dark" ? "light" : "dark" };
        case "setTheme":
            return { ...state, mode: action.payload };
        default:
            return state;
    }
}
