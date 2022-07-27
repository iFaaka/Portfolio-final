import React, { useState } from "react";
import { ProyectCard } from "../TercerModulo/ProyectCard";
import { CertifList } from "./components/Certif-Module/CertifList";
import { Contact } from "./components/Contact-Module/Contact";
import { DescriptionResume } from "./components/Description-Module/DescriptionResume";
import { HeaderResume } from "./components/Header-Module/HeaderResume";

export const CuartoModulo = ({ nextWindow }) => {
  const [usageImage, setUsageImage] = useState(0);

  return (
    <div>
      <nav>
        <a onClick={() => nextWindow(0)}>Volver al inicio</a>
      </nav>
      <HeaderResume />
      <DescriptionResume />
      <CertifList />
      <ProyectCard />
      <Contact />
    </div>
  );
};
