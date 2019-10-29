import React from "react";

import { navLinks } from "../../config";

const SidebarContent = ({ toggleSidebar }) => {
  const handleClick = () => {
    toggleSidebar();
  };

  const navItem = navLinks.map(item => {
    const { name, url } = item;
    return (
      <li class="nav__item" key={name}>
        <a onClick={handleClick} href={url} class="nav__link">
          <span>{name}</span>
        </a>
      </li>
    );
  });

  return <div>{navItem}</div>;
};

export default SidebarContent;
