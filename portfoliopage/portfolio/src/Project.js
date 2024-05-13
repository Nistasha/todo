import React from 'react';

import './App.css'; // Import your CSS file

// Project component
const Project = ({ title, description, technologies }) => {
  return (
    <div className="project">
      <h2 className="project-title">{title}</h2>
      <div className="project-content">
        <p>{description}</p>
        <div className="technologies">
          <h3>Technologies used:</h3>
          <ul>
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};



export default Project;
