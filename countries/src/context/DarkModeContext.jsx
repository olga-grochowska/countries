import React, { createContext, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((currentIsDarkMode) => !currentIsDarkMode);
  };
  const themes = {
    light: {
      color: "hsl(200, 15%, 8%)",
      background: "hsl(0, 0%, 98%)",
      backgroundElement: "hsl(0, 0%, 100%)",
    },
    dark: {
      color: "hsl(0, 0%, 100%)",
      background: "hsl(207, 26%, 17%)",
      backgroundElement: "hsl(209, 23%, 22%)",
    },
  };
  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        currentTheme: isDarkMode ? themes.dark : themes.light,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
