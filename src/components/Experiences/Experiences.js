import React from "react";
import WorkExperienceHeader from "./WorkExperienceHeader"
import WorkExperienceContent from "./WorkExperienceContent"
import EducationHeader from './EducationHeader'
import EducationContent from './EducationContent'

const Experiences = () => (
  <section id="experience">
    <WorkExperienceHeader />
    <WorkExperienceContent />
    <EducationHeader />
    <EducationContent />
  </section>
);

export default Experiences;
