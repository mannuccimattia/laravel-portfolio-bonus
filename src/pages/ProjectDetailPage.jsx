import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import GlobalContext from "../contexts/globalContext";
import InfoSmall from "../components/InfoSmall";

const ProjectDetailPage = () => {

  const { id } = useParams();

  const { setIsLoading } = useContext(GlobalContext);

  const [project, setProject] = useState([]);

  const { name, client, date, type, description, technologies } = project;


  const fetchProject = () => {
    setIsLoading(true);

    axios.get(`${import.meta.env.VITE_API_URL}/${id}`).then(resp => {
      setTimeout(() => {
        setProject(resp.data.data);
        setIsLoading(false);
      }, 600);
    }).catch(err => console.log(err));
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-12">
            <h1 className="text-secondary text-center">{name}</h1>
          </div>
        </div>

        {project.date !== undefined &&
          <div className="row gy-4 my-3 border border-secondary rounded">
            <>
              <div className="col-12">
                <InfoSmall type={type} client={client} date={date} />
              </div>

              <div className="col-12">
                {technologies.map(tech => (
                  <div className="badge me-2" key={`tech-${tech.id}`} style={{ backgroundColor: tech.color }}>
                    {tech.name}
                  </div>
                ))}
              </div>

              <div className="mb-3">
                {description}
              </div>
            </>
          </div>
        }
      </div>
    </>
  )
}

export default ProjectDetailPage
