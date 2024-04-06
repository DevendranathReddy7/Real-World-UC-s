import React, { useState } from "react";
import "./PasswordGenerator.css";

const PasswordGenerator = (props) => {
  const [password, setPassword] = useState({
    upperCase: false,
    lowerCase: false,
    numbers: false,
    symbols: null,
  });
  const [length, setLength] = useState(null);
  return (
    <div>
      <input type="range" />
    </div>
  );
};
export default PasswordGenerator;
