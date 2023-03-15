/* import { useState } from 'react';
import courses from "../resources/courses";

const RenderCourses = (center) => {
  return center.map(course =>
      <div key={course.name}>
        <h3>{course.name}</h3>
        <Certification course={course} />
      </div>
  );
}

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
  const showHide = () => {
    
  }

  return courses.map(center => 
    <div key={center.id}>
      <h2>{center.name}</h2>
      <button type="button" onClick={() => {showHide()}}></button>
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
}; */

import { ReactComponent as Foundations } from "../images/coursesImages/top-foundations.svg";
import { ReactComponent as Intermediate } from "../images/coursesImages/top-intermediate.svg";

const Roadmap = () => {
  return (
    <div className="roadmap">

      <div className="finished-certified">
        <h1>Finished Courses with Certification</h1>

        <div>
          <h2>Responsive Web Design Certification</h2>
          <h3>from freeCodeCamp</h3>
          <h4>Skills:</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <img src={require("../images/certifications/freeCodeCamp_ResponsiveWebDesign.png")} alt="" />
        </div>

        <div>
          <h2>JavaScript Algorithms and Data Structures Certification</h2>
          <h3>from freeCodeCamp</h3>
          <h4>Skills:</h4>
          <ul>
            <li>JavaScript</li>
            <li>Algorithms</li>
            <li>OOP (Object Oriented Programming)</li>
            <li>FP (Functional Programming)</li>
          </ul>
          <img src={require("../images/certifications/freeCodeCamp_JavaScriptAlgorithms.png")} alt="" />
        </div>

        <div>
          <h2>CS50's Understanding Technology</h2>
          <h3>from CS50</h3>
          <h4>Skills:</h4>
          <ul>
            <li>Fundamentals of Internet</li>
            <li>Fundamentals of Multimedia</li>
            <li>Fundamentals of Security</li>
            <li>Fundamentals of Web development</li>
            <li>Fundamentals of Programming</li>
          </ul>
          <img src={require("../images/certifications/CS50-UT.png")} alt="" />
        </div>
      </div>

      <div>
        <h1>Other Finished Courses</h1>

        <div>
          <div>
            <Foundations />
            <h2>Foundations</h2>
          </div>
          <h3>from The Odin Project</h3>
          <h4>Skills:</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Git and GitHub</li>
            <li>VirtualBox</li>
            <li>CLI (Command Line Interface)</li>
          </ul>
        </div>

        <div>
          <div>
            <Intermediate />
            <h2>Intermediate HTML and CSS Course</h2>
          </div>
          <h3>from The Odin Project</h3>
          <h4>Skills:</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>SVG</li>
          </ul>
        </div>

        <div>
          <div>
            <img src={require("../images/coursesImages/cisco-ic.png")} alt="" />
            <h2>Introducción a la Ciberseguridad</h2>
          </div>
          <h3>from CISCO</h3>
          <h4>Skills:</h4>
          <ul>
            <li>Fundamentals of Cibersecurity</li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Roadmap;