import projectsList from "../resources/projectsList";

const Presentation = () => {
	return (
		<div className="presentation">
			<h1>Hi! My name is Judit</h1>
			<h2>I'm a Full Stack web developer based in Spain</h2>
			<img src={require("../images/coding.jpg")} alt="" />
			<h4>English Spanish Catalan</h4>
		</div>
	)
}

const SomeProjects = () => {
	return projectsList.map(project => 
		<div key={project.id}>
			<h3>{project.name}</h3>
			<a href={project.url} target="_blank" ><img src={require("../images/test.jpg")} alt=""  /></a>
		</div>	
	)
}

const Skills = () => {
	return (
		<div>
			
		</div>
	)
}

const Home = () => {
	return (
		<>
			<Presentation />
			<SomeProjects />
			<Skills />
		</>
	);
};
  
export default Home;