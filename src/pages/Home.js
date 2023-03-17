import projectsList from "../resources/projectsList";
import skills from "../resources/skills.json";
import Contact from "./Contact";
import { ReactComponent as Foundations } from "../images/coursesImages/top-foundations.svg";
import { ReactComponent as Intermediate } from "../images/coursesImages/top-intermediate.svg";

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

const Courses = () => {
	return (
		<div className="homeCourses">
			<div>
				<img src={require("../images/certifications/freeCodeCamp_ResponsiveWebDesign.png")} alt="" />
				<h2>Responsive Web Design</h2>
				<h3>freeCodeCamp</h3>   
			</div>

			<div>
				<img src={require("../images/certifications/freeCodeCamp_JavaScriptAlgorithms.png")} alt="" />
				<h2>JavaScript Algorithms</h2>
				<h3>freeCodeCamp</h3>
			</div>

			<div>
				<img src={require("../images/certifications/CS50-UT.png")} alt="" />
				<h2>Understanding Technology</h2>
				<h3>Harvard University</h3>
			</div>

			<div>
				<Foundations />
				<h2>Foundations</h2>
				<h3>The Odin Project</h3>
			</div>

			<div>
				<Intermediate />
				<h2>Intermediate HTML and CSS</h2>
				<h3>The Odin Project</h3>
			</div>

			<div>
				<img src={require("../images/coursesImages/cisco-ic.png")} alt="" />
				<h2>Introduction to Cibersecurity</h2>
				<h3>CISCO</h3>
			</div>
		</div>
	)
}

const SkillsFrontend = () => {
	return skills.frontend.map(skill =>
		<div className="skill" key={skill.id}>
			<img src={require(`../images/logos/${skill.image}`)} alt="" />
			<p>{skill.name}</p>
		</div>
	)
}

const SkillsBackend = () => {
	return skills.backend.map(skill =>
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
				<h2>COURSES</h2>
			</div>
			<div className="coursesContainer">
				<Courses />
			</div>

			<div className="title titleColor">
				<h2>SKILLS</h2>
			</div>
			<h3 className="skillsType">Frontend</h3>
			<div className="skillsContainer">
				<SkillsFrontend />
			</div>
			<h3 className="skillsType">Backend</h3>
			<div className="skillsContainer">
				<SkillsBackend />
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