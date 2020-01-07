import React from "react";

const skills = [
  "React",
  "React Native",
  "Node.js",
  "GraphQL",
  "CSS",
  "Docker",
  "JavaScript",
];
const AboutSkills = () => (
  <div className="about-skill">
    {skills.map(skill => (
      <div className="about-skill-item">{skill}</div>
    ))}
  </div>
);

export default AboutSkills;
