import React from "react";
import Card from "./CardItem";

const works = [
  {
    title: "Video Directly Observed Therapy System",
    info: `Designed and developed web and mobile applications in cooperation with medical team.
  The app feature includes of registering, chatting, sending pictures and videos, notification, alarming, reporting the document.
  Designed backend server enabling pictures and videos to be stored persistently in an online database.`,
  },
  { title: "Game for eldery", info: "Develop game based rehabilitation system for stroke patient. [Unity Game Engine with C#]" },
];

const ExperiencesContent = () => (
  <div className="experience-content">
    {works.map(({ title, info }) => (
      <Card title={title} info={info} />
    ))}
  </div>
);

export default ExperiencesContent;
