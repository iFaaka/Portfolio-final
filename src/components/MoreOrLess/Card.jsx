import "./stylesheets/Card.css";
export const Card = ({ img, price, name, hidden, isCorrect }) => {
  return (
    <div className="card-container">
      {isCorrect && <span>{hidden}</span>}
      <img className="card-image" src={require(`./assets/${img}.png`)} />
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};
