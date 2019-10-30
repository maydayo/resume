import React from "react";
import AboutHeader from "./AboutHeader"
import AboutInfo from "./AboutInfo"
import AboutSkills from "./AboutSkills"

const AboutContent = () => (
  <div className='about-content-container' >
    <AboutHeader />
    <AboutInfo />
    <AboutSkills />
    {/* <AboutResume /> */}
  </div>
);

export default AboutContent;
