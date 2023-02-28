import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NoMatch } from "../../components/NoMatch";
import { DarkModeContext } from "../../context/DarkModeContext";
import { BackButton } from "./BackButton";
import styled from "styled-components";

const CountryDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "back"
    "flag"
    "text";
  @media (min-width: 850px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "back back "
      "flag text";
    column-gap: 30px;
  }
  & > * {
    margin: 30px 30px 60px 30px;
  }
`;

const BackButtonContainer = styled.div`
  grid-area: back;
  padding: 10px 0px;
  margin-bottom: 30px;
  @media (min-width: 1100px) {
    padding: 15px 20px;
    margin-bottom: 0px;
  }
`;

const CountryFlagImage = styled.img`
  width: 80%;
  height: auto;
  grid-area: flag;
  align-self: center;
  @media (min-width: 600px) {
    width: 60%;
  }
  @media (min-width: 850px) {
    justify-self: end;
    width: 80%;
  }
  @media (min-width: 1300px) {
    width: 60%;
  }
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 24px -8px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 24px -8px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 24px -8px rgba(66, 68, 90, 1);
`;

const CountryDetailsAll = styled.div`
  grid-are: text;
  align-self: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  & > h2 {
    font-size: 2rem;
    padding: 10px;
  }
`;

const CountryDetailsDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 15px 10px;
  & > p {
    padding: 5px 0px;
  }
  @media (min-width: 850px) {
    height: 200px;
  }
`;

const CountryDetailsBorders = styled.div`
  padding: 15px 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  & > p {
    margin: 5px 5px 5px 0px;
  }
`;

const CountryDetailsBorderItem = styled.p`
  padding: 4px 15px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 24px -8px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 24px -8px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 24px -8px rgba(66, 68, 90, 1);
`;

export const Details = () => {
  const { currentTheme } = useContext(DarkModeContext);
  const { country } = useParams();
  const [countryDetails, setCountryDetails] = useState();
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
      {countryDetails ? (
        <CountryDetailsContainer
          style={{
            color: currentTheme.color,
            backgroundColor: currentTheme.background,
          }}
        >
          <BackButtonContainer>
            <BackButton />
          </BackButtonContainer>
          <CountryFlagImage
            src={countryDetails.flag}
            alt={`Flag of ${countryDetails.name}`}
          />
          <CountryDetailsAll>
            <h2>{countryDetails.name}</h2>
            <CountryDetailsDescription>
              <p>
                <b>Native Name: </b>
                {countryDetails.nativeName}
              </p>
              <p>
                <b>Population: </b>
                {countryDetails.population
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
              <p>
                <b>Region: </b>
                {countryDetails.region}
              </p>
              <p>
                <b>Sub Region: </b>
                {countryDetails.subregion}
              </p>
              {countryDetails.capital ? (
                <p>
                  <b>Capital: </b>
                  {countryDetails.capital}
                </p>
              ) : (
                <p>
                  <b>Capital: </b>no capital
                </p>
              )}
              <p>
                <b>Top Level Domain: </b>
                {countryDetails.topLevelDomain}
              </p>
              {countryDetails.currencies ? (
                <p>
                  <b>Currencies: </b>
                  {countryDetails.currencies[0].name}
                </p>
              ) : (
                <p>
                  <b>Currencies: </b>no currencies
                </p>
              )}
              {countryDetails.languages ? (
                <p>
                  <b>Languages: </b>
                  {countryDetails.languages
                    .map((language) => language.name)
                    .join(", ")}
                </p>
              ) : (
                <p>
                  <b>Languages: </b>no languages
                </p>
              )}
            </CountryDetailsDescription>
            {countryDetails.borders ? (
              <CountryDetailsBorders>
                <p>
                  <b>Border Countries: </b>
                </p>
                {countryDetails.borders.map((border) => {
                  return (
                    <CountryDetailsBorderItem
                      key={border}
                      style={{
                        backgroundColor: currentTheme.backgroundElement,
                      }}
                    >
                      {border}
                    </CountryDetailsBorderItem>
                  );
                })}
              </CountryDetailsBorders>
            ) : (
              <CountryDetailsBorders>
                <p>
                  <b>Borders: </b>no borders
                </p>
              </CountryDetailsBorders>
            )}
          </CountryDetailsAll>
        </CountryDetailsContainer>
      ) : (
        <NoMatch />
      )}
    </>
  );
};
