import React, { useState } from "react";
import { ProyectCard } from "../TercerModulo/ProyectCard";
import { CertifList } from "./components/Certif-Module/CertifList";
import { Contact } from "./components/Contact-Module/Contact";
import { DescriptionResume } from "./components/Description-Module/DescriptionResume";
import { HeaderResume } from "./components/Header-Module/HeaderResume";
import "./stylesheets/CuartoModulo.css";
export const CuartoModulo = ({ nextWindow }) => {
  const [usageImage, setUsageImage] = useState(0);

  return (
    <div>
      <nav className="nav-container">
        <a onClick={() => nextWindow(0)}>Volver al inicio</a>
      </nav>
      <div className="cuarto-modulo-container">
        <HeaderResume />
        <DescriptionResume />
        <CertifList />
        <details className="desplegable">
          <summary>Proyectos</summary>
          <ProyectCard /> 
        </details>
        
        <Contact />
      </div>
    </div>
  );
};
