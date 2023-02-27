import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/DarkModeContext";
import styled from "styled-components";

const PageContainer = styled.div`
  text-align: center;
  padding: 10vh;
`;

const LinkStyled = styled(Link)`
  &:hover {
    font-weight: 800;
  }
`;

export const NoMatch = () => {
  const { currentTheme } = useContext(DarkModeContext);

  return (
    <PageContainer
      style={{
        color: currentTheme.color,
        backgroundColor: currentTheme.background,
      }}
    >
      <h2>Nothing to see here!</h2>
      <p>
        <LinkStyled
          to="/"
          style={{
            color: currentTheme.color,
          }}
        >
          Go to the home page
        </LinkStyled>
      </p>
    </PageContainer>
  );
};
