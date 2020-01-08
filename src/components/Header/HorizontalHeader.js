import React from "react";
import { navLinks } from "../../config";

const navItem = navLinks.map(item => {
  const { name, url } = item;
  return (
    <li key={name}>
      <a href={url}>
        <span>{name}</span>
      </a>
    </li>
  );
});
const HorizontalHeader = () => (
  <nav className="horizontal-navigation-container">
    <ul className="horizontal-navigation">{navItem}</ul>
  </nav>
);
export default HorizontalHeader;
