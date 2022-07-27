import React from "react";
import './stylesheets/DescriptionResume.css'
export const DescriptionResume = () => {
  return (

      <details className="desplegable">
        <div className="description-container">
          <summary>Descripcion</summary>
          <span className="description-text">Aqui va una descripcion </span>
            <a href="https://www.codewars.com/users/iFaaka">
              <img src="https://www.codewars.com/users/iFaaka/badges/large" />
            </a> 
          </div>
      </details>
  )
};
