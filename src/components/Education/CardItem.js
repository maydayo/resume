import React from "react";

const EducationItem = ({ title, info }) => {
  const infolist = info.split("\n").map(list=><li key={list}>{list}</li>)
  return (
    <div className="experience-card">
      <div className="experience-card--title">{title}</div>
      <div>{infolist}</div>
    </div>
  );
};

export default EducationItem;
