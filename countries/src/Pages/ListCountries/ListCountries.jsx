import React, { useEffect } from "react";

export const ListCountries = () => {
  useEffect(() => {
    fetch(
      "https://restcountries.com/v2/all?fields=name,capital,flag,population,regions"
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return <div>ListCountries</div>;
};
