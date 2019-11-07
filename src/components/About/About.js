import React from "react";
import AboutPicture from "./AboutPicture";
import AboutContent from "./AboutContent";

const targets = document.querySelectorAll("div");
console.log(targets);
const About = () => (
  <section
    id="about"
    data-aos='fade-up'
    data-aos-offset="200"
  >
    <AboutPicture />
    <AboutContent />
  </section>
);

export default About;
