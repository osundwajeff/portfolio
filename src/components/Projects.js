import React from 'react';
import Project from './Project';


const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Urban Green Spaces mapping App. Above is a web application tool that maps Urban Green Spaces across various cities worldwide. The tool is uses the Earth Engine JavaScript API to do the analysis. The backend preprocess the Landsat image, then classifies the image using Random Forest algorithm . It utilises automatica training data generation used in the classification over the time period. It also utilises training sapmple migration in GEE to be able to classify historical data accurately. The output are spatial-temporal maps and a graph showing the area changes.',
      image: 'https://github.com/osundwajeff/official_portfolio/blob/main/ugs_project.png?raw=true',
      url: 'https://mag.users.earthengine.app/view/demo2ugs',
      githubUrl: 'https://github.com/osundwajeff',
    },
    {
      title: 'Project 2',
      description: 'This is a description for project 2',
      image: 'https://via.placeholder.com/350x150',
      url: 'https://www.example.com/project-2',
      githubUrl: 'https://github.com/username/project-2',
    },
    {
      title: 'Project 3',
      description: 'This is a description for project 3',
      image: 'https://via.placeholder.com/350x150',
      url: 'https://www.example.com/project-3',
      githubUrl: 'https://github.com/username/project-3',
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Projects</h2>
          </div>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              url={project.url}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
