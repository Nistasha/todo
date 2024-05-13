// Portfolio component
import React from 'react';
import projectData from './projectData'; // Import project data
import Project from './Project'
const Portfolio = () => {
    return (
      <div>
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    );
  };

  export default Portfolio;