import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/css/style.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experiences/Experiences";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <div className="content-warper">
      <Home />
      {/* <Header /> */}
      <About />
      <Experience />
      <Education />
      <Contact />
      <Navigation />

    </div>
  );
};

export default App;
