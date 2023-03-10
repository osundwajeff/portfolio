import React from 'react';
import Project from './Project';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is a description for project 1',
      image: 'https://via.placeholder.com/350x150',
      url: 'https://www.example.com/project-1',
      githubUrl: 'https://github.com/username/project-1',
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
