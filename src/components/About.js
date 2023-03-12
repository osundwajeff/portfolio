import React from 'react';
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
              I am a GIS, Remote Sensing, and Spatial Data Science expert with a strong background in software development. I am passionate about utilizing open-source technologies to solve complex spatial problems, and I am a dedicated Linux systems and Server administrator. With a keen interest in the intersection of technology and the natural world, I am committed to using my skills to create meaningful and impactful solutions. I am always looking for new and exciting opportunities to learn and grow in this field.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
