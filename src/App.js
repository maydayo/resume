import React from "react";
import "./styles/css/style.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home"
import About from './components/About/About'
import Experience from './components/Experiences/Experiences'

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Home />
      <Header />
      <About />
      <Experience />
    </div>
  );
}

export default App;
