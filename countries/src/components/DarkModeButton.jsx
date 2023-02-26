import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export const DarkModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <button
      style={
        isDarkMode
          ? { background: "black", color: "white" }
          : { background: "white", color: "black" }
      }
      onClick={handleClick}
    >
      Dark Mode
    </button>
  );
};
