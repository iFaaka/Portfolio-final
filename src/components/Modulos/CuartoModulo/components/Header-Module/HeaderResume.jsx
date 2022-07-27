import React, { useState } from "react";
import "./stylesheets/HeaderResume.css";

export const HeaderResume = () => {
  const [inputRange, setInputRange] = useState(0);
  const [image, setImage] = useState("program");
  const handleChange = (e) => {
    setInputRange(e.target.value);
    console.log(inputRange);
    if (inputRange >= 3) {
      setImage("camara-falsa");
    } else {
      setImage("program");
    }
  };
  return (
    <div className="header">
      <img
        src={require(`../../../../assets/${image}.png`)}
        className="profile-ico"
      />
      <input
        type="range"
        min="0"
        max="5"
        value={inputRange}
        onChange={(e) => handleChange(e)}
      />
      <h1>Facundo N. Alvarez</h1>
    </div>
  );
};
