import React from "react";
import { Card } from "./Card";
import "./stylesheets/SegundoModulo.css";
export const SegundoModulo = ({ nextWindow }) => {
  const moduleInfo = [
    {
      title: "El primer paso lo di en FreeCodeCamp",
      description:
        "Aqui pude tener un primer vistazo a HTML y CSS, donde me certifique con alguno de estos proyectos",
      certification: "https://i.ibb.co/GkTcFPf/image.png",
      urlcert:
        "https://freecodecamp.org/certification/ifaaka/responsive-web-design ",
      proyect: "https://i.ibb.co/VH2Gs6X/image.png",
      urlproyect: "https://bajadaproducto-fcc.netlify.app/",
    },
    {
      title: "En paralelo, realice un curso de Python Web Full Stack",

      description:
        "Tuve mi primer vistaso a SQL y Javascript. Este fue uno  de los TP Front-End que presente",
      certification: "https://i.ibb.co/rMQnnr6/image.png",
      urlcert: "https://i.ibb.co/rMQnnr6/image.png",
      proyect: "https://i.ibb.co/GkpMgPf/image.png",
      urlproyect: "https://tp-codoacodo-alvarezfacundo.netlify.app/",
    },
  ];

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
