import React, { useState } from "react";
import menuIcon from "../images/menu-icon.png";
import profileIcon from "../images/profile-icon.png";
import Menu from "./Menu";
import ProfilePage from "./ProfilePage";

const NavBar = () => {
  const [showSetting, setShowSetting] = useState(false);
  const [showProfile,setShowPrfile]=useState(false);

  return (
    <>
      <nav className="flex justify-between px-3.5 bg-white min-h-[50px] items-center">
        <button
          className="p-2 rounded-md hover:scale-110 transition-transform"
          onClick={() => setShowSetting(!showSetting)}
        >
          <img
            src={menuIcon}
            alt="Menu icon"
            className="w-8 h-8 md:w-10 md:h-10 cursor-pointer"
          />
        </button >
        <Menu show={showSetting} onClose={() => setShowSetting(false)} />
        <button className="p-2 rounded-md hover:scale-110 transition-transform"
          onClick={() => setShowPrfile(!showProfile)}>
        <img
            src={profileIcon}
            alt="Menu icon"
            className="w-8 h-8 md:w-10 md:h-10 cursor-pointer"/>
        </button>
        <ProfilePage showProfile={showProfile} onCloseProfile={() => setShowPrfile(false)} />
      </nav>
      
      {/* Menu component */}
     
    </>
  );
};

export default NavBar;
