import React from "react";
import WorkExperienceHeader from "./WorkExperienceHeader";
import WorkExperienceContent from "./WorkExperienceContent";

const Experiences = () => (
  <section
    id="experience"
    className="section-warper"
    data-aos="fade"
    //data-aos-anchor-placement="top-bottom"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
  >
    <WorkExperienceHeader />
    <WorkExperienceContent />
  </section>
);

export default Experiences;
