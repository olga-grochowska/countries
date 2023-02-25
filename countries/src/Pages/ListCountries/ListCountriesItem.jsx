import React from "react";
import { Link } from "react-router-dom";

export const ListCountriesItem = ({
  flag,
  name,
  population,
  region,
  capital,
}) => {
  return (
    <Link to={name}>
      <img src={flag} alt={`Flag of ${name}`} />
      <h2>{name}</h2>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Capital: {capital}</p>
    </Link>
  );
};
