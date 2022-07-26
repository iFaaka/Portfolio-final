import { getProyects } from "./assets/getProyects";
import { Proyect } from "./Proyect";
import "./stylesheets/ProyectCard.css";
export const ProyectCard = () => {
  const data = getProyects();

  return (
    <div className="proyects-container">
      <Proyect
        urlGit={data[0].urlGit}
        title={data[0].title}
        url={data[0].url}
        img={data[0].img}
      />
      <Proyect
        urlGit={data[1].urlGit}
        title={data[1].title}
        url={data[1].url}
        img={data[1].img}
      />
      <Proyect
        urlGit={data[2].urlGit}
        title={data[2].title}
        url={data[2].url}
        img={data[2].img}
      />
      <Proyect
        urlGit={data[3].urlGit}
        title={data[3].title}
        url={data[3].url}
        img={data[3].img}
      />
    </div>
  );
};
