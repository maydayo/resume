import React from "react";

const skills = ["React", "react-native", "nodejs","graphql", "python"];
const AboutSkills = () => (
  <div className="about-skill">
    { skills.map(skill => <div className="about-skill-item">{skill}</div>)}
  </div>
);

export default AboutSkills;
