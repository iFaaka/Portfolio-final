import React, { useRef, useState } from "react";
import "./stylesheets/Pregunta.css";
export const Pregunta = ({
  changeQuestion,
  question,
  ans1,
  ans2,
  correct,
  setScore,
  hidden,
  id,
}) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const handleClick = (val) => {
    setIsHidden(false);
    if (val === correct) {
      setScore((prevS) => prevS + 5);
      setIsCorrect(true);
      setTimeout(() => {
        setIsCorrect(false);
        setIsHidden(true);
        changeQuestion((prevS) => prevS + 1);
      }, 1000);
    } else {
      setIsHidden(false);
      setTimeout(() => {
        setIsHidden(true);
        changeQuestion((prevS) => prevS + 1);
      }, 1000);
    }
  };

  return (
    <div className="question-container">
      <p className="question">{question}</p>
      <p className={`${isHidden && "hidden"}`}>{hidden}</p>
      <button
        className={`button-answer ${
          isCorrect && ans1 === correct ? "correct" : ""
        }`}
        onClick={() => handleClick(ans1)}
      >
        {ans1}
      </button>
      <button
        className={`button-answer  ${
          isCorrect && ans2 === correct ? "correct" : ""
        }`}
        disabled={id === "3" ? true : false}
        onClick={() => handleClick(ans2)}
      >
        {ans2}
      </button>

      {id === "2" ? (
        <>
          <p>Aqui puedes verla:</p>{" "}
          <a
            target="_blank"
            className="link-to-proyect"
            href="https://blackbox-challenge.netlify.app/"
          >
            ¡Trivia! Para el challenge de BlackBox
          </a>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
