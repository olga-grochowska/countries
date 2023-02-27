import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import moonLight from "../images/moon-outline.svg";
import moonDark from "../images/moon.svg";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const MoonImage = styled.img`
  height: 30px;
  margin: 5px;
`;

export const DarkModeButton = () => {
  const { isDarkMode, toggleDarkMode, currentTheme } =
    useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <Button
      style={{
        color: currentTheme.color,
        backgroundColor: currentTheme.backgroundElement,
      }}
      onClick={handleClick}
    >
      <MoonImage
        src={isDarkMode ? moonDark : moonLight}
        alt="Icon of color mode"
      ></MoonImage>
      Dark Mode
    </Button>
  );
};
