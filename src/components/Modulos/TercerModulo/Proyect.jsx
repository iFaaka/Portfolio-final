import React from "react";
import "./stylesheets/Proyect.css";
export const Proyect = ({ title, img, url, urlGit }) => {
  return (
    <div className="proyect-card-container">
      <p className="proyect-title">{title}</p>
      <a href={url} target="_blank">
        <img
          className="proyect-img"
          src={require(`./assets/image/${img}.png`)}
        />
      </a>
      <img className="react-ico" src={require(`./assets/image/React.png`)} />
      <span className="link-to-git">
        <a className="proyect-a" target="_blank" href={urlGit}>
          Aqui esta su Github
        </a>
      </span>
    </div>
  );
};
