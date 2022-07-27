import React from "react";
import { getCertif } from "../../assets/getCertif";
import { Card } from "../SegundoModulo/Card";
import { ProyectCard } from "./ProyectCard";
import "./stylesheets/TercerModulo.css";

export const TercerModulo = ({ nextWindow }) => {
  const data = getCertif();

  return (
    <div className="tercer-modulo-container">
      <h1 className="title">
        ¡Llegamos al tramo final! Gracias por acompañarme hasta aca
      </h1>

      <div>
        <Card
          title={data[2].title}
          description={data[2].description}
          certification={data[2].certification}
          urlcert={data[2].urlcert}
          proyect={data[2].proyect}
          urlproyect={data[2].urlproyect}
        />
      </div>

      <h2 className="title">
        Y aqui termino mi viaje acompañado por certificaciones y empezo mi
        camino autodidacta
      </h2>
      <span className="tercer-description">
        Me enfoque de lleno de React y pude realizar los siguientes proyectos
        personales, algunos ya los conoces, una version recortada de ellos formo
        parte de este portfolio
      </span>
      <div>
        <ProyectCard />
      </div>
      <button onClick={() => nextWindow(7)} className="modulo-button">
        Continuemos...
      </button>
    </div>
  );
};
