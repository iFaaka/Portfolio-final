import React, { useEffect, useState } from "react";
import { items } from "./assets/items";
import { Card } from "./Card";
import "./stylesheets/MoreOrLess.css";

export const MoreOrLess = ({ nextWindow }) => {
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

  let fragment;

  if (questionNumber < 3) {
    fragment = (
      <div className="more-or-less">
        <h1 className="mol-title">¿Otro juego? ¡Otro juego!</h1>
        <h2 className="mol-subtitle">More or less</h2>

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
              disabled={data[questionNumber].hidden1 === "" && true}
              onClick={() => handleClick(1)}
              className={`mol-button ${
                isCorrect && !oneLessTwo() ? "correct" : "incorrect"
              }`}
            >
              {data[questionNumber].button2}
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    fragment = (
      <div className="mol-game-container final-container">
        <h1 className="title-card">
          Terminaste el ultimo mini-juego de este portfolio
        </h1>
        <span className="subtitle-card final-card">
          Estaba hecho con un objeto codeado a mano, pero realice este mismo
          juego con la API de Mercadolibre. ¡Animate a probarlo!
          <p className="final-card-link">
            {" "}
            <a
              className="final-card-a"
              target="_blank"
              href="https://moreorlessmeli.netlify.app/"
            >
              {" "}
              Clickeame para jugar
            </a>
          </p>
        </span>
        <button className="mol-button" onClick={() => nextWindow(6)}>
          Continuemos...
        </button>
      </div>
    );
  }

  return <>{fragment}</>;
};
