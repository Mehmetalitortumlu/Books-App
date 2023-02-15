import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        let themes = localStorage.getItem("theme")
        setTheme(JSON.parse(themes) || "dark")
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme]);


    const values = {
        theme,
        setTheme
    }
    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);