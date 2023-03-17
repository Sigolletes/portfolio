import projectsList from "../resources/projectsList";
import skills from "../resources/skills.json";
import Contact from "./Contact";

const Presentation = () => {
	return (
		<div className="presentation">
			<h1>Hi! My name is Judit</h1>
			<h2>I'm a Full Stack web developer based in Spain</h2>
			<img src={require("../images/coding.jpg")} alt="" />
		</div>
	)
}

const SomeProjects = () => {
	return projectsList.map(project => 
		<div className="someProject" key={project.id}>
			<a href={project.url} target="_blank" rel="noreferrer" ><img src={require(`../images/projectImages/${project.image}`)} alt="" /></a>
			<a className="projectName" href={project.url} target="_blank" rel="noreferrer" >{project.name}</a>
		</div>	
	)
}

const Skills = () => {
	return skills.map(skill =>
		<div className="skill" key={skill.id}>
			<img src={require(`../images/logos/${skill.image}`)} alt="" />
			<p>{skill.name}</p>
		</div>
	)
}

const Home = () => {
	return (
		<>
			<Presentation />
			<div className="title titleColor">
				<h2>SOME PROJECTS</h2>
			</div>
			<div className="someProjectsContainer">
				<SomeProjects />
			</div>
			<div className="title titleColor">
				<h2>SKILLS</h2>
			</div>
			<div className="skillsContainer">
				<Skills />
			</div>
			<div className="title titleColor">
				<h2>CONTACT</h2>
			</div>
			<div className="contactContainer">
				<Contact />
			</div>
		</>
	);
};
  
export default Home;