import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import styled from "styled-components";

const SelectField = styled.select`
  padding: 12px;
  border: none;
  border-radius: 5px;
  width: 150px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 24px -8px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 24px -8px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 24px -8px rgba(66, 68, 90, 1);
`;

export const Filter = ({ handleChangeFilter }) => {
  const { currentTheme } = useContext(DarkModeContext);

  return (
    <SelectField
      onChange={handleChangeFilter}
      name="continent"
      id="continentFilter"
      style={{
        color: currentTheme.color,
        backgroundColor: currentTheme.backgroundElement,
      }}
    >
      <option value="all">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </SelectField>
  );
};
