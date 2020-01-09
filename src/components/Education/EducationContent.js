import React from "react";
import Card from "./CardItem";

const works = [
  {
    title: `Final Project${"\n"}EyeAIM: Camera based eye tracking system mobile application`,
    info:
      "Created an android app which is integrated OpenCV library allowing user to use eyes-movement to control the app andalso electrical appliances via Bluetooth." +
      "\n" +
      "Attendee i-CREATe 2017 (11 th international Convention on Rehabilitation Engineering and Assistive Technology) at Kobe, Japan",
  },
];

const EducationContent = () => (
  <div className="experience-content">
    {works.map(({ title, info }) => (
      <Card title={title} info={info} />
    ))}
  </div>
);

export default EducationContent;
