import React from "react";
const HamburgerIcon = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={
        isSidebarOpen
          ? "d-none hamburger hamburger--spin is-active"
          : "d-none hamburger hamburger--spin"
      }
      onClick={() => {
        return toggleSidebar();
      }}
      type="button"
    >
      <span className="hamburger-box"></span>
    </div>
  );
};

export default HamburgerIcon;
