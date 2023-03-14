import courses from "../resources/courses";

/* const RenderCourses = (center) => {
  return center.map(course =>

  );
} */

const Certification = ({course}) => {
  if (course.certification) {
    return (
      <div>
        <img src={require(`../images/certifications/${course.certification}`)} alt="" />
      </div>
    )
  } else {
    return null
  }
}

const RenderSchools = () => {
  return courses.map(center => 
    <div key={center.id}>
      <h2>{center.name}</h2>
      
      {center.courses.map(course => {
        return (
          <div key={course.name}>
            <h3>{course.name}</h3>
            <Certification course={course} />
          </div>
        )
      })}
      

     {/*  <RenderCourses center={center} /> */}

    </div>
  )
}

const Roadmap = () => {
  return (
    <div className="roadmap">
      <h1>ROADMAP</h1>
      <RenderSchools />
    </div>
  );
};

export default Roadmap;