import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Details = () => {
  const { country } = useParams();
  const [countryDetails, setCountryDetails] = useState([]);
  useEffect(() => {
    fetch(
      `https://restcountries.com/v2/name/${country}?fields=name,nativeName,population,capital,region,subregion,topLevelDomain,currencies,languages,borders,flag&fullText=true`
    )
      .then((response) => response.json())
      .then((data) => setCountryDetails(data[0]))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [country]);

  return (
    <>
      <img src={countryDetails.flag} alt={`Flag of ${countryDetails.name}`} />
      <h2>{countryDetails.name}</h2>
      <p>Native Name: {countryDetails.nativeName}</p>
      <p>Population: {countryDetails.population}</p>
      <p>Region: {countryDetails.region}</p>
      <p>Sub Region: {countryDetails.subregion}</p>
      <p>Capital: {countryDetails.capital}</p>
      <p>Top Level Domain: {countryDetails.topLevelDomain}</p>
      {/* <p>Currencies: {countryDetails.currencies[0].name}</p>
      <p>
        Languages:{" "}
        {countryDetails.languages.map((language) => language.name).join(", ")}
      </p>
      <p>Border Countries:</p>
      <ul>
        {countryDetails.borders.map((border) => {
          return <li key={border}>{border}</li>;
        })}
      </ul> */}
    </>
  );
};
