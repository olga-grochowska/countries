import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkModeContext";
import styled from "styled-components";

const CountryContainer = styled(Link)`
  margin: 30px;
  width: 250px;
  text-decoration: none;
  border-radius: 5px;
  overflow: hidden;
`;

const FlagImage = styled.img`
  width: 100%;
  height: 160px;
  -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 6px -6px #222;
`;

const CountryDescription = styled.div`
  margin: 10px;
  & > h2 {
    padding: 10px 5px;
  }
  & > p {
    padding: 3px 5px;
  }
`;

export const ListCountriesItem = ({
  flag,
  name,
  population,
  region,
  capital,
}) => {
  const { currentTheme } = useContext(DarkModeContext);
  return (
    <CountryContainer
      to={name}
      style={{
        color: currentTheme.color,
        backgroundColor: currentTheme.backgroundElement,
      }}
    >
      <FlagImage src={flag} alt={`Flag of ${name}`} />
      <CountryDescription>
        <h2>{name}</h2>
        <p>
          <b>Population:</b>{" "}
          {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
        <p>
          <b>Region:</b> {region}
        </p>
        {capital ? (
          <p>
            <b>Capital:</b> {capital}
          </p>
        ) : null}
      </CountryDescription>
    </CountryContainer>
  );
};
