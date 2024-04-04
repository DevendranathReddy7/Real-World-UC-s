import React from "react";
import "./CurrencyConverter.css";
const DropDown = ({ curList, curType }) => {
  return (
    <select className="dropdown">
      {curList?.map((cur) => {
        return <option key={cur}>{cur}</option>;
      })}
    </select>
  );
};
export default DropDown;
