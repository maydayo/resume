import React from "react";

const EducationItem = ({ title, info }) => (
  <div className='experience-card'>
    <div className='experience-card--title'>{title}</div>
    <div>{info}</div>
  </div>
);

export default EducationItem;
