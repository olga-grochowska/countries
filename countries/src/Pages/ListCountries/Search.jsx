import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import searchLight from "../../images/search-outline-light.svg";
import searchDark from "../../images/search-outline-dark.svg";
import styled from "styled-components";

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  width: 250px;
  -webkit-box-shadow: 0px 0px 24px -8px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 24px -8px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 24px -8px rgba(66, 68, 90, 1);
`;

const SearchIcon = styled.img`
  height: 15px;
  padding: 0px 12px;
`;

const SearchInput = styled.input`
  border: none;
  padding: 12px;
  width: 210px;
  border-radius: 5px;
`;

export const Search = ({ handleChangeInput }) => {
  const { isDarkMode, currentTheme } = useContext(DarkModeContext);

  return (
    <SearchWrapper
      style={{
        color: currentTheme.color,
        backgroundColor: currentTheme.backgroundElement,
      }}
    >
      <SearchIcon
        src={isDarkMode ? searchDark : searchLight}
        alt="Search icon"
      />
      <SearchInput
        onChange={handleChangeInput}
        type="search"
        placeholder="Search for a country..."
        style={{
          color: currentTheme.color,
          backgroundColor: currentTheme.backgroundElement,
        }}
      />
    </SearchWrapper>
  );
};
