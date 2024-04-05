import React from "react";
import "./CurrencyConverter.css";
const DropDown = ({ curList, curType, selectedCur, defaultCurrency }) => {
  const dropdownHandler = (e) => {
    selectedCur(e.target.value, curType);
  };

  return (
    // <div className="dropdown__container">
    <select
      className="dropdown"
      onChange={dropdownHandler}
      value={defaultCurrency}
    >
      {curList?.map((cur) => {
        return (
          <option key={cur} className="option">
            {cur}
          </option>
        );
      })}
    </select>
    //</div>
  );
};
export default DropDown;
