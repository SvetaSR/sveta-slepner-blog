import { useState } from "react";
import { darkTheme, theme } from "../theme";

export const useThemeSwitcher = () => {
    const isDarkModeFromLocalStorage = typeof window !== 'undefined' ? localStorage?.getItem('isDarkMode') : undefined;
    const [isDarkMode, setIsDarkMode] = useState(isDarkModeFromLocalStorage ? isDarkModeFromLocalStorage === 'true' : false);
  
    const toggleIsDarkMode = () => {
      const newValue = !isDarkMode;
      setIsDarkMode(newValue);
      localStorage.setItem('isDarkMode', newValue);
    };

    return { isDarkMode, toggleIsDarkMode, theme: isDarkMode ? darkTheme : theme };
}