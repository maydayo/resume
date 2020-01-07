import React from "react";
import EducationHeader from "./EducationHeader";
import EducationContent from "./EducationContent";

const Education = () => (
  <section
    id="education"
    className="section-warper"
    data-aos='fade'
    //data-aos-anchor-placement="top-bottom"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
  >
    <EducationHeader />
    <EducationContent />
  </section>
);

export default Education;
