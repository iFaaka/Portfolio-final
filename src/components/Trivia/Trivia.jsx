import React from "react";
import { ListaDePreguntas } from "./ListaDePreguntas";
import "./stylesheets/Trivia.css";

export const Trivia = ({ nextWindow }) => {
  return (
    <div className="trivia-app">
      <h2 className="trivia-title">¡Trivia!</h2>
      <ListaDePreguntas nextWindow={nextWindow} />
    </div>
  );
};
