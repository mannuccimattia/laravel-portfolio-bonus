import React from 'react';

const ProjectCard = ({ project }) => {
  const { name, client, date, type, description } = project;

  return (
    <div className='col-12 col-lg-6 col-xxl-4 d-flex'>
      <div className="card bg-dark border-secondary h-100 d-flex">
        <div className="card-header border-secondary bg-secondary ">
          <h5 className="card-title mt-1 text-dark">{name}</h5>
        </div>
        <div className="card-body d-flex flex-column">
          <small className="card-text mb-3 text-secondary">
            {!type ? "Project " : `${type.name} project `}
            {!client ? "made " : `made for ${client}`}
            {` in ${date}`}
          </small>

          <p className="card-text flex-grow-1 text-white-50">
            {description.slice(0, 150)}...
          </p>

          <a href="#" className="btn btn-sm btn-outline-primary mt-3 mx-auto">
            Find out more
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;