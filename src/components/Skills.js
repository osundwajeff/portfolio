import React from 'react';
import Skill from './Skill';


const Skills = () => {
  const skillsData = [
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'SASS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: "Bootstrap", logo: "https://cdn.svgporn.com/logos/bootstrap.svg" },
    { name: "Python", logo: "https://cdn.svgporn.com/logos/python.svg" },
    { name: "Django", logo: "https://cdn.svgporn.com/logos/django.svg" },
    { name: "GeoDjango", logo: "https://www.djangoproject.com/m/img/logos/django-logo-negative.png" },
    { name: "R", logo: "https://cdn.svgporn.com/logos/r-lang.svg" },
    { name: "C", logo: "https://cdn.svgporn.com/logos/c.svg" },
    { name: "Linux", logo: "https://cdn.svgporn.com/logos/linux-tux.svg" },
    { name: "Bash", logo: "https://cdn.svgporn.com/logos/bash.svg" }
  ];

  return (
    < section id="Skill">
    <div className="skills">
      {skillsData.map(skill => (
        <Skill key={skill.name} name={skill.name} logo={skill.logo} />
      ))}
    </div>
    </section>
  );
};

export default Skills;
