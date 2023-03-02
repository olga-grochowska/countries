import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import logoDark from "../images/logo-github-dark.svg";
import logoLight from "../images/logo-github-light.svg";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  @media (min-width: 750px) {
    flex-direction: row;
  }
  & > * {
    text-decoration: none;
  }
`;

const FooterLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 24px -8px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 24px -8px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 24px -8px rgba(66, 68, 90, 1);
  @media (max-width: 749px) {
    margin: 5px;
  }
`;

const GitHubImage = styled.img`
  height: 50px;
  width: auto;
`;

export const Footer = () => {
  const { isDarkMode, currentTheme } = useContext(DarkModeContext);

  return (
    <FooterContainer
      style={{
        color: currentTheme.color,
        backgroundColor: currentTheme.backgroundElement,
      }}
    >
      <FooterLink
        href="https://github.com/olga-grochowska"
        target="_blank"
        rel="noreferrer"
        style={{
          color: currentTheme.color,
          backgroundColor: currentTheme.background,
        }}
      >
        Developer Olga Grochowska
        <GitHubImage
          src={isDarkMode ? logoDark : logoLight}
          alt="Icon of GitHub"
        />
      </FooterLink>
      <FooterLink
        href="https://github.com/olga-grochowska/countries"
        target="_blank"
        rel="noreferrer"
        style={{
          color: currentTheme.color,
          backgroundColor: currentTheme.background,
        }}
      >
        Code for this project
        <GitHubImage
          src={isDarkMode ? logoDark : logoLight}
          alt="Icon of GitHub"
        />
      </FooterLink>
      <FooterLink
        href="https://restcountries.com/"
        target="_blank"
        rel="noreferrer"
        style={{
          color: currentTheme.color,
          backgroundColor: currentTheme.background,
        }}
      >
        REST API Countries
      </FooterLink>
    </FooterContainer>
  );
};
