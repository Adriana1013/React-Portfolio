import React from "react";
import Project from "../components/Project"

  const listProjects = [
    {
    id: 0,
    title: "Password Generator",
    languages: "HTML, CSS, JavaScript",
    image: "react-portfolio/react-portfolio/public/Password Generator.png",
    description: "Generates a password that meets certain criteria so that you can create a strong password that provides greater security",
    repository: "https://github.com/Adriana1013/Homework-week-03",
    deployed: "https://adriana1013.github.io/Homework-week-03/",
  },
];

function Portfolio() {
return (
<section>
  <div>
    <h1>Adriana's Portfolio</h1>
  </div>
  <div>
    <ul className="proj">
        <li>
            <Project listProjects={listProjects}/>
        </li>
    </ul>
  </div>
</section>
);

}

export default Portfolio;