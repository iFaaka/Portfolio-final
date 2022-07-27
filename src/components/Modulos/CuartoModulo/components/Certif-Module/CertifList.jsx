import React from "react";
import { getCertif } from "../../../../assets/getCertif.js";
import { CardCertif } from "./CardCertif";
import "./stylesheet/CertifList.css";
export const CertifList = () => {
  const certif = getCertif();
  return (
    <div className="certif-container">
      Mis certificaciones
      <CardCertif
        title={"FreeCodeCamp"}
        url={certif[0].urlcert}
        img={certif[0].certification}
      />
      <CardCertif
        title={"FreeCodeCamp"}
        url={certif[2].urlcert}
        img={certif[2].certification}
      />
      <CardCertif
        title={"Codo a Codo 4.0"}
        url={certif[1].urlcert}
        img={certif[1].certification}
      />
      <CardCertif
        title={"Google Activate"}
        url={certif[3].urlcert}
        img={certif[3].certification}
      />
    </div>
  );
};
