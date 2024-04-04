import React, { useEffect, useState } from "react";
import "./CurrencyConverter.css";
import DropDown from "./DropDown";

const CurrencyConverter = (props) => {
  const [currencies, setCurrencies] = useState();
  const [selectedCurrencies, setSelectedCurrencies] = useState({
    from: "",
    to: "",
  });
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const getCurrencies = async () => {
      const res = await fetch("https://api.frankfurter.app/currencies", {
        method: "GET",
      });
      const data = await res.json();
      setCurrencies(Object.keys(data));
    };
    getCurrencies();
  }, []);

  const convertHandler = async () => {
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${selectedCurrencies.from}&to=${selectedCurrencies.to}`,
      { method: "GET" }
    );
    const data = await res.json();
  };

  const amountHandler = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const swapHandler = () => {};

  const currencyHandler = () => {};
  return (
    <div className="wrapper">
      <h3 className="heading">Currency Converter</h3>
      <div className="dropdown__wrapper">
        <div>
          <DropDown
            curList={currencies}
            curType="from"
            selectedCur={currencyHandler}
          />
        </div>
        <div onClick={swapHandler}>
          <p className="swap">🔄️</p>
        </div>
        <div>
          <DropDown
            curList={currencies}
            curType="to"
            selectedCur={currencyHandler}
          />
        </div>
      </div>

      <div>
        <input
          className="input"
          placeholder="Enter Amount"
          onChange={amountHandler}
        />
      </div>
      <div>
        <button className="convert" onClick={convertHandler}>
          Convert
        </button>
      </div>
    </div>
  );
};
export default CurrencyConverter;
