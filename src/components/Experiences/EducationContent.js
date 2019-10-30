import React from "react";
import Card from "./CardItem";

const works = [
  { title: "info", info: "workworkworkworkworkwork" },
];

const EducationContent = () => (
  <div className="experience-content">
    {works.map(({ title, info }) => (
      <Card title={title} info={info} />
    ))}
  </div>
);

export default EducationContent;
