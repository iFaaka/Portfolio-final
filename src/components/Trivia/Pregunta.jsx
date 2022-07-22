import React from "react";
import "./stylesheets/Pregunta.css";
export const Pregunta = ({
  changeQuestion,
  question,
  ans1,
  ans2,
  correct,
  setScore,
}) => {
  const handleClick = (val) => {
    if (val === correct) {
      setScore((prevS) => prevS + 5);
      changeQuestion((prevS) => prevS + 1);
      console.log("Correcto!");
    } else {
      changeQuestion((prevS) => prevS + 1);
    }
  };

  return (
    <div className="question-container">
      <p className="question">{question}</p>
      <button className="button-answer" onClick={() => handleClick(ans1)}>
        {ans1}
      </button>
      <button className="button-answer" onClick={() => handleClick(ans2)}>
        {ans2}
      </button>
    </div>
  );
};
