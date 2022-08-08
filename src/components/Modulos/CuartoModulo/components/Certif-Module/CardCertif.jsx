import "./stylesheet/CardCertif.css";
export const CardCertif = ({ img, title, url }) => {
  return (
    <div className="certification-container">
      <span>{title}</span>
      <a className="certif-a" href={url} target="_blank">
        <img className="card-certif-img" src={img} />
      </a>
    </div>
  );
};
