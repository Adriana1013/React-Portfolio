import React from "react";

function Project(props) {
  return (
    <div>
      {props.listProjects.map((listProjects) => (
        <div>
          <img src={require('../Assets/PasswordGenerator.png')} alt="passwordgenerator" className="image1" />
            <p key={listProjects.id}>
             {listProjects.title}
                  </p>
                {listProjects.description}
                <div>
                  <h4>Languages:</h4> {listProjects.languages}
                </div>
             <div>
                <p></p>
                <a href={listProjects.repository} target="_blank" rel="noreferrer" > View my github repository</a>
                <p></p>
                <a href={listProjects.deployed} target="_blank" rel="noreferrer" > Check out my app! </a>
            </div>
        </div>
      ))}
    </div>
);
}

export default Project;