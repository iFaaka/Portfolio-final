import React from "react";
import "./stylesheets/PrimerModulo.css";
export const PrimerModulo = ({ nextWindow }) => {
  return (
    <div className="modulo-container">
      <div className="title-container">
        <h1>Mi primer vistazo a la programacion lo tuve en Python</h1>
      </div>
      <div className="descripcion-container">
        <img
          src="https://i.ibb.co/HNS8tv9/StopLoss.png"
          alt="python-calculator"
        />
        <p>
          En el 2020 ya se estaba sintiendo el nuevo boom de las criptos y un
          amigo tenia problema para marcar su{" "}
          <a
            target="_blank"
            href="https://www.novatostradingclub.com/trading/%C2%BFque-es-un-stop-loss/"
          >
            StopLoss{" "}
          </a>
          por lo que aproveche para hacer esta super primitiva app.
        </p>
        <p>
          ¿Se ve bastante feita no? La guardo con cariño y pienso mantener su
          estilo original
        </p>
      </div>
      <button
        className="modulo-button"
        onClick={() => nextWindow((prevS) => prevS + 1)}
      >
        Continuemos...
      </button>
      <footer>
        Luego de investigar mas las ramas de la programacion, decidi virar a la
        programacion web.
      </footer>
    </div>
  );
};
