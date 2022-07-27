import "./stylesheet/CardCertif.css";
export const CardCertif = ({ img, title, url }) => {
  return (
    <div>
      <span>{title}</span>
      <a href={url} target="_blank">
        <img className="card-certif-img" src={img} />
      </a>
    </div>
  );
};
