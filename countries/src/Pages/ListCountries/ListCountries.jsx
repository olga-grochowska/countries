import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { ListCountriesItem } from "./ListCountriesItem";
import { RotatingLines } from "react-loader-spinner";
import styled from "styled-components";
import { Search } from "./Search";
import { Filter } from "./Filter";

const ListCountriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const LoadingContainer = styled.div`
  margin: 50px;
`;

export const ListCountries = () => {
  const { currentTheme } = useContext(DarkModeContext);
  const [countries, setCountries] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filterValue, setFilterValue] = useState("all");

  useEffect(() => {
    fetch(
      "https://restcountries.com/v2/all?fields=name,capital,flag,population,region"
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoaded(true);
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <Search handleChangeInput={(e) => setInputValue(e.target.value)} />
      <Filter handleChangeFilter={(e) => setFilterValue(e.target.value)} />
      <ListCountriesContainer
        style={{
          color: currentTheme.color,
          backgroundColor: currentTheme.background,
        }}
      >
        {!isLoaded ? (
          <LoadingContainer>
            <h2>Loading...</h2>
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </LoadingContainer>
        ) : (
          countries
            .filter((country) => {
              if (filterValue === "all") {
                return country;
              } else if (
                country.region.toLowerCase().includes(filterValue.toLowerCase())
              ) {
                return country;
              }
              return false;
            })
            .filter((country) => {
              if (inputValue === "") {
                return country;
              } else if (
                country.name.toLowerCase().includes(inputValue.toLowerCase())
              ) {
                return country;
              }
              return false;
            })
            .map((country) => {
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
            })
        )}
      </ListCountriesContainer>
    </>
  );
};
