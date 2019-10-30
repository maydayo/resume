import React from "react";
import Card from "./CardItem";

const works = [
  { title: "info", info: "workworkworkworkworkwork" },
  { title: "info", info: "workworkworkworkworkworkworkwork" },
  { title: "info", info: "" },
];

const ExperiencesContent = () => (
  <div className="experience-content">
    {works.map(({ title, info }) => (
      <Card title={title} info={info} />
    ))}
  </div>
);

export default ExperiencesContent;
