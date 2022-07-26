import React, { useState } from "react";
import { getitems } from "./assets/getitems";
import { Pregunta } from "./Pregunta";

export const ListaDePreguntas = ({ nextWindow }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);

  const myQuestions = getitems();

  let fragment;
  if (questionNumber < 4) {
    fragment = (
      <Pregunta
        question={myQuestions[questionNumber].q}
        ans1={myQuestions[questionNumber].ans1}
        ans2={myQuestions[questionNumber].ans2}
        correct={myQuestions[questionNumber].correct}
        setScore={setScore}
        changeQuestion={setQuestionNumber}
        hidden={myQuestions[questionNumber].hidden}
        id={myQuestions[questionNumber].id}
      />
    );
  } else {
    fragment = (
      <div className="result-container">
        <p>¡El juego termino! Tu puntuacion fue de {score}/20</p>
        <p>Continuemos con el portfolio...</p>
      </div>
    );

    setTimeout(() => {
      nextWindow(4);
    }, 4000);
  }
  return <div>{fragment}</div>;
};
