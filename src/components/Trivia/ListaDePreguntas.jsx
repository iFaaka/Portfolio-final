import React, { useState } from "react";
import { Pregunta } from "./Pregunta";

export const ListaDePreguntas = ({ nextWindow }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const myQuestions = [
    {
      q: "¿A que rama de la programacion web me dedico?",
      ans1: "Front-End",
      ans2: "Back-End",
      correct: "Front-End",
    },
    {
      q: "¿Cual?",
      ans1: "resp1",
      ans2: "resp2",
      correct: "resp2",
    },
    {
      q: "¿Cual2?",
      ans1: "resp12",
      ans2: "resp22",
      correct: "resp12",
    },
    {
      q: "¿Cual3?",
      ans1: "resp13",
      ans2: "resp23",
      correct: "resp23",
    },
  ];

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
      />
    );
  } else {
    fragment = (
      <div>
        <p>El juego termino! Tu puntuacion fue de {score}/20</p>
        <p>Continuemos con el portfolio...</p>
      </div>
    );

    setTimeout(() => {
      nextWindow((prevS) => prevS + 1);
    }, 4000);
  }
  return <div>{fragment}</div>;
};
