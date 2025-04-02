import React, { useState } from "react";
import menuIcon from "../images/menu-icon.png";
import profileIcon from "../images/profile-icon.png";
import Menu from "./Menu";
import ProfilePage from "./ProfilePage";

const NavBar = ({ menuOpen, setMenuOpen }) => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <nav className="flex justify-between px-3.5 bg-white min-h-[50px] items-center mb-3 ">
        {/* Menu Button */}
        <button
          className="p-2 rounded-md hover:scale-110 transition-transform"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            src={menuIcon}
            alt="Menu icon"
            className="w-8 h-8 md:w-10 md:h-10 cursor-pointer"
          />
        </button>

        {/* Profile Button */}
        <button
          className="p-2 rounded-md hover:scale-110 transition-transform"
          onClick={() => setShowProfile(!showProfile)}
        >
          <img
            src={profileIcon}
            alt="Profile icon"
            className="w-8 h-8 md:w-10 md:h-10 cursor-pointer"
          />
        </button>

        {/* Sidebar Menu */}
        <Menu show={menuOpen} onClose={() => setMenuOpen(false)} />

        {/* Profile Page */}
        <ProfilePage showProfile={showProfile} onCloseProfile={() => setShowProfile(false)} />
      </nav>
    </>
  );
};

export default NavBar;
