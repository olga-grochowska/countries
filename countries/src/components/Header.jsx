import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { DarkModeButton } from "./DarkModeButton";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 0 auto;
  @media (min-width: 600px) {
    padding: 10px 30px;
  }
  @media (min-width: 1100px) {
    padding: 15px 50px;
  }
`;

const HeaderHeading = styled.h1`
  font-weight: 800;
  font-size: 2rem;
`;

export const Header = () => {
  const { currentTheme } = useContext(DarkModeContext);
  return (
    <HeaderContainer
      style={{
        color: currentTheme.color,
        backgroundColor: currentTheme.backgroundElement,
      }}
    >
      <HeaderHeading>Where in the world?</HeaderHeading>
      <DarkModeButton />
    </HeaderContainer>
  );
};
