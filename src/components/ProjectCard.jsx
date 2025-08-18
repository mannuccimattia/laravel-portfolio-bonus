import { useNavigate } from "react-router-dom";
import InfoSmall from "./InfoSmall";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const { id, name, client, date, type, description } = project;

  return (
    <div className='col-12 col-lg-6 col-xxl-4 d-flex'>
      <div className="card bg-dark border-secondary h-100 d-flex">
        <div className="card-header border-secondary bg-secondary ">
          <h5 className="card-title mt-1 text-dark">{name}</h5>
        </div>
        <div className="card-body d-flex flex-column">
          <InfoSmall type={type} client={client} date={date} />
          <p className="card-text flex-grow-1 text-white-50">
            {description.slice(0, 150)}...
          </p>

          <button onClick={() => navigate(`/projects/${id}`)} className="btn btn-sm btn-outline-primary mt-3 mx-auto">
            Find out more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;