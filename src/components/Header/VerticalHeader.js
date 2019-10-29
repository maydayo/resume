import React from "react";

import SidebarContent from "./SidebarContent";

const isServer = typeof window === "undefined";

const VerticalHeader = ({ isSidebarOpen, toggleSidebar }) => {
  return isSidebarOpen ? (
    <div>
      <SidebarContent
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
    </div>
  ) : (
    <div />
  );
};

export default VerticalHeader;
