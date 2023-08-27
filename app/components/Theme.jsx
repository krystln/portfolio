"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
export const ThemeSwitcherContext = createContext();

const Theme = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  const switchTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={isDarkTheme}>
      <ThemeSwitcherContext.Provider value={switchTheme}>
        {children}
      </ThemeSwitcherContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Theme;
