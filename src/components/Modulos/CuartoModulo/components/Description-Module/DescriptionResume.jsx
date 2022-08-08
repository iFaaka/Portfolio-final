import React from "react";
import "./stylesheets/DescriptionResume.css";
export const DescriptionResume = () => {
  return (
    <details className="desplegable">
      <div className="description-container">
        <span className="description-text">Front-End Developer</span>
        <p className="description-text first-parah">
          ¡Hola! Dejame presentarme por si tomaste el camino corto. Soy de
          Argentina, desarrollo aplicaciones Web desde el Front-End con
          JavaScript y React, mi formación en estas áreas fue en parte
          Autodidacta y en parte a través de cursos guiados y freeCodeCamp.{" "}
        </p>
        <p className="description-text second-parah">
          Contantemente estoy desarrollando mis habilidades en estas áreas, por
          lo que te invito a pasar por mi GitHub para ver que estuve trabajando.
          En paralelo, una de mis webs favoritas es CodeWars, donde practico mis
          skills en Javascript, te dejo mi perfil y mi nivel de{" "}
          <a
            target="_blank"
            href="https://docs.codewars.com/gamification/ranks/"
          >
            Kyu
          </a>{" "}
          para que veas mi progreso
        </p>

        <a target="_blank" href="https://www.codewars.com/users/iFaaka">
          <img
            className="kyu-img"
            src="https://www.codewars.com/users/iFaaka/badges/large"
          />
        </a>
        <p className="description-text third-parah">
          Este portafolio está realizado en su totalidad en React, reciclando
          componentes entre las distintas partes del mismo, para comprobarlo te
          invito a probar el camino largo para concerme.
        </p>
      </div>
    </details>
  );
};
