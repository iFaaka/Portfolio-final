import React, { useState } from "react";
import { items } from "./assets/items";
import { Card } from "./Card";
import "./stylesheets/MoreOrLess.css";

export const MoreOrLess = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const data = items();

  const handleClick = (id) => {
    if (id === 0 && oneLessTwo()) {
      setIsCorrect(true);
      setTimeout(() => {
        setIsCorrect(false);
        setQuestionNumber((prevS) => prevS + 1);
      }, 1000);
    } else if (id === 1 && !oneLessTwo()) {
      setIsCorrect(true);
      setTimeout(() => {
        setIsCorrect(false);
        setQuestionNumber((prevS) => prevS + 1);
      }, 1000);
    } else {
      setTimeout(() => {
        setQuestionNumber((prevS) => prevS + 1);
      }, 1000);
    }
  };

  const oneLessTwo = () =>
    data[questionNumber].price1 > data[questionNumber].price2;

  return (
    <div className="more-or-less">
      <h1>¿Otro juego? ¡Otro juego!</h1>
      <h2>More or less</h2>

      <div className="mol-game-container">
        <div className="title-mol-container">
          <p className="title-card">{data[questionNumber].title[0]}</p>
          {!!data[questionNumber].title[1] && (
            <span className="subtitle-card">
              {data[questionNumber].title[1]}
            </span>
          )}
        </div>
        <div className="mol-cards-container">
          <Card
            name={data[questionNumber].item1}
            price={data[questionNumber].price1}
            img={data[questionNumber].img1}
            title={data[questionNumber].title}
            hidden={data[questionNumber].hidden}
            isCorrect={isCorrect}
          />
          <Card
            title={data[questionNumber].title}
            name={data[questionNumber].item2}
            price={"*****"}
            img={data[questionNumber].img2}
            hidden={data[questionNumber].hidden1}
            isCorrect={isCorrect}
          />
        </div>

        <div className="mol-button-container">
          <button
            onClick={() => handleClick(0)}
            className={`mol-button ${
              isCorrect && oneLessTwo() ? "correct" : "incorrect"
            }`}
          >
            {data[questionNumber].button1}
          </button>
          <button
            onClick={() => handleClick(1)}
            className={`mol-button ${
              isCorrect && !oneLessTwo() ? "correct" : "incorrect"
            }`}
          >
            {data[questionNumber].button2}
          </button>
        </div>
      </div>
      <button onClick={() => setQuestionNumber(0)}>Retroceder</button>
    </div>
  );
};
