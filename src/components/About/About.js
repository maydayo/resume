import React from "react";
import AboutPicture from "./AboutPicture";
import AboutContent from "./AboutContent";

const targets = document.querySelectorAll("div");
console.log(targets);
const About = () => (
  <section
    id="about"
    className="section-warper"
    data-aos='fade'
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
  >
    <AboutPicture />
    <AboutContent />
  </section>
);

export default About;
