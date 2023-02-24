import React, { useEffect, useState } from "react";
import { ListCountriesItem } from "./ListCountriesItem";

export const ListCountries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(
      "https://restcountries.com/v2/all?fields=name,capital,flag,population,regions"
    )
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <>
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
    </>
  );
};
