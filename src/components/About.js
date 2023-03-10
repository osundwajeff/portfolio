import React from 'react';
import Skill from './Skill';
import avatar from '../images/avatar.jpg';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <img src={avatar} alt="Avatar" />
          </div>
          <div className="col-lg-8">
            <h2>About Me</h2>
            <p>
              My name is Jeff.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
