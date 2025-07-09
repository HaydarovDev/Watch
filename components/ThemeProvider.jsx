"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(false);
  const toggleTheme = () => setMode((prev) => !prev);

  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [mode]);
  return (
    <>
      <ThemeContext.Provider value={{ mode, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
export const useTheme = () => useContext(ThemeContext);
