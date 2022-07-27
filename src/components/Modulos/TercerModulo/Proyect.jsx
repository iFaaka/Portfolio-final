import React from "react";
import "./stylesheets/Proyect.css";
export const Proyect = ({ title, img, url }) => {
  return (
    <div className="proyect-card-container">
      <p className="proyect-title">{title}</p>
      <img className="proyect-img" src={require(`./assets/image/${img}.png`)} />
      <span>
        <a className="proyect-a" target="_blank" href={url}>
          Aqui esta su Github
        </a>
      </span>
    </div>
  );
};
