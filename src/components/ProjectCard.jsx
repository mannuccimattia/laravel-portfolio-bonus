import React from 'react'

const ProjectCard = ({ project }) => {
  const { name, client, date, type, technologies, description } = project;
  return (
    <div className='col-12 col-lg-6 col-xl-4'>
      <div className="card bg-dark border-secondary  text-light">
        <div className="card-header border-secondary">
          <h5 className="card-title">{name}</h5>
        </div>
        <div className="card-body">
          <small className='card-text'>
            {!type ? "Project " : `${type.name} project `}
            {!client ? "made " : `made for ${client}`}
            {` in ${date}`}
          </small>

          <p className="card-text my-3">
            {description}
          </p>
          <a href="#" className="btn btn-sm btn-outline-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
