import React from "react";
import { getitems } from "../../Trivia/assets/getitems";
import { getItem } from "./assets/getItem";
import { Card } from "./Card";
import "./stylesheets/SegundoModulo.css";
export const SegundoModulo = ({ nextWindow }) => {
  const moduleInfo = getItem();
  return (
    <div className="modulo-container">
      <h1 className="module-title">
        Para adquirir las habilidades necesarias pase por varios cursos
      </h1>
      <span>Los mas destables o que mayor cariño les guardo son:</span>

      <Card
        title={moduleInfo[0].title}
        description={moduleInfo[0].description}
        certification={moduleInfo[0].certification}
        proyect={moduleInfo[0].proyect}
        urlcert={moduleInfo[0].urlcert}
        urlproyect={moduleInfo[0].urlproyect}
      />
      <Card
        title={moduleInfo[1].title}
        description={moduleInfo[1].description}
        certification={moduleInfo[1].certification}
        proyect={moduleInfo[1].proyect}
        urlcert={moduleInfo[1].urlcert}
        urlproyect={moduleInfo[1].urlproyect}
      />

      <button
        className="modulo-button"
        onClick={() => nextWindow((prevS) => prevS + 1)}
      >
        Continuemos...
      </button>
    </div>
  );
};
