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
    <div className="header-final">
      <div className="title-container">
        <img
          src={require(`../../../../assets/${image}.png`)}
          className="profile-img"
        />
        <input
          type="range"
          min="0"
          max="5"
          value={inputRange}
          onChange={(e) => handleChange(e)}
          className="header-input"
        />
        <h1 className="name-container">Facundo Alvarez</h1>
      </div>
    </div>
  );
};
