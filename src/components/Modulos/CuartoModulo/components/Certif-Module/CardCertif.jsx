import "./stylesheet/CardCertif.css";
export const CardCertif = ({ img }) => {
  return (
    <div>
      <span>title</span>
      <img className="card-certif-img" src={img} />
    </div>
  );
};
