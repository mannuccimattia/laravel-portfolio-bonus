import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import GlobalContext from "../contexts/globalContext";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {

  const [projects, setProjects] = useState([]);
  const { setIsLoading } = useContext(GlobalContext);

  const fetchProjects = () => {
    setIsLoading(true);
    axios.get(`${import.meta.env.VITE_API_URL}`).then(resp => {
      setTimeout(() => {
        setProjects(resp.data.data);
        setIsLoading(false);
      }, 600);
    }).catch(err => console.log(err));
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  console.log('API URL:', import.meta.env.VITE_API_URL);
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-12">
            <h1>ProjectsPage Content</h1>
          </div>
        </div>

        <div className="row gy-4 my-3">
          <>
            {projects.map(project => (
              <ProjectCard key={`proj-${project.id}`} project={project} />
            ))}
          </>
        </div>
      </div>
    </>
  )
}

export default ProjectsPage
