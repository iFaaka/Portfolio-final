import "./stylesheets/Card.css";

export const Card = ({
  title,
  description,
  certification,
  proyect,
  urlproyect,
  urlcert,
}) => {
  return (
    <div className="card">
      <div className="img-principal-container">
        <a href={urlcert} target="_blank">
          <img className="module-2-img" alt="" src={`${certification}`} />
        </a>
      </div>
      <div className="text-container">
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
      <div className="proyect-container">
        <a href={urlproyect} target="_blank">
          <img className="module-2-img" src={`${proyect}`} />
        </a>
      </div>
    </div>
  );
};
