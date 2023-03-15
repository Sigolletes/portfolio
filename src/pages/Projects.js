import Contact from "./Contact";
import projectsList from "../resources/projectsList";

const RenderProjects = () => {
	return projectsList.map(project => 
		<div className="project" key={project.id}>

      <a className="projectName" href={project.url} target="_blank" rel="noreferrer" >{project.name}</a>

      <h3>{project.course}</h3>

			<a href={project.url} target="_blank" rel="noreferrer" ><img src={require(`../images/projectImages/${project.image}`)} alt="" /></a>

      <h2>TECHNOLOGIES</h2>  
      <div className="techList">
        { project.technologies.map((tech) => {
          return <p>{tech}</p>;
        }) }
      </div>

		</div>	
	)
}

const Projects = () => {
  return (
    <div className="projects">

      <h1>PROJECTS</h1>

      <RenderProjects />

      <Contact />

    </div>
  );
};
  
export default Projects;