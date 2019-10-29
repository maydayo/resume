import React, { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import VerticalHeader from "./VerticalHeader";
import HorizontalHeader from "./HorizontalHeader";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="header">
      <HamburgerIcon
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      <HorizontalHeader />
      <VerticalHeader
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
    </div>
  );
};

export default Header;
