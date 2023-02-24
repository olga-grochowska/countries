import React from "react";

export const ListCountriesItem = ({
  flag,
  name,
  population,
  region,
  capital,
}) => {
  return (
    <>
      <img src={flag} alt={`Flag of ${name}`} />
      <h2>{name}</h2>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Capital: {capital}</p>
    </>
  );
};
