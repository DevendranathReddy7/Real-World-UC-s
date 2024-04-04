import React from "react";
import CurrencyConverter from "./usecases/CurrencyConverter/CurrencyConverter";

//https://api.frankfurter.app/latest?amount=1&from=USD&to=INR
const CurrencyConverterIndex = (props) => {
  return (
    <div>
      <CurrencyConverter />
    </div>
  );
};
export default CurrencyConverterIndex;
