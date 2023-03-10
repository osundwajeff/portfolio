import React from 'react';

const Skill = ({ name, logo }) => {
  return (
    <div className="skill">
      <img src={logo} alt={`${name} logo`} />
      <h3>{name}</h3>
    </div>
  );
};

export default Skill;
