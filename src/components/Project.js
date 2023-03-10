import React from 'react';

const Project = ({ title, description, image, url, githubUrl }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card mb-4">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <a href={url} className="btn btn-primary mr-2" target="_blank" rel="noopener noreferrer">
            View Live
          </a>
          <a href={githubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
