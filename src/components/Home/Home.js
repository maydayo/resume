import React from "react";
import HomeGreeting from "./HomeGreeting";
import HomeMainContent from "./HomeMainContent";
import HomeSubContent from "./HomeSubContent";
import HomeArrow from "./HomeArrow";

const Home = () => (
  <section id="home">
    <div className="home-wrapper">
      <HomeGreeting />
      <HomeMainContent />
      <HomeSubContent />
    </div>
    <HomeArrow />
  </section>
);

export default Home;
