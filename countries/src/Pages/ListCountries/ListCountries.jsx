import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { ListCountriesItem } from "./ListCountriesItem";
import styled from "styled-components";

const ListCountriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ListCountries = () => {
  const { currentTheme } = useContext(DarkModeContext);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(
      "https://restcountries.com/v2/all?fields=name,capital,flag,population,region"
    )
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <ListCountriesContainer
      style={{
        color: currentTheme.color,
        backgroundColor: currentTheme.background,
      }}
    >
      {countries.map((country) => {
        return (
          <ListCountriesItem
            key={country.name}
            flag={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        );
      })}
    </ListCountriesContainer>
  );
};
