import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { useNavigate } from "react-router-dom";
import arrowDark from "../../images/arrow-back-dark.svg";
import arrowLight from "../../images/arrow-back-light.svg";
import styled from "styled-components";

const BackButtonStyled = styled.button`
  border: none;
  padding: 4px 30px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 24px -8px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 24px -8px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 24px -8px rgba(66, 68, 90, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & > img {
    height: 20px;
    width: auto;
    margin-right: 5px;
  }
`;

export const BackButton = () => {
  const { isDarkMode, currentTheme } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <BackButtonStyled
      style={{
        color: currentTheme.color,
        backgroundColor: currentTheme.backgroundElement,
      }}
      onClick={goBack}
    >
      <img src={isDarkMode ? arrowDark : arrowLight} alt="Arrow" />
      Back
    </BackButtonStyled>
  );
};
