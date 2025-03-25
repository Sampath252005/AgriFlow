import React, { useState } from "react";
import menuIcon from "../images/menu-icon.png";
import Menu from "./Menu";

const NavBar = () => {
  const [showSetting, setShowSetting] = useState(false);

  return (
    <>
      <nav className="flex justify-between px-3.5 bg-white min-h-[50px] items-center">
        <h1 className="font-bold text-[15px] md:text-[20px]">App Name</h1>
        <button
          className="p-2 rounded-md hover:scale-110 transition-transform"
          onClick={() => setShowSetting(!showSetting)}
        >
          <img
            src={menuIcon}
            alt="Menu icon"
            className="w-8 h-8 md:w-10 md:h-10 cursor-pointer"
          />
        </button>
      </nav>
      
      {/* Menu component */}
      <Menu show={showSetting} onClose={() => setShowSetting(false)} />
    </>
  );
};

export default NavBar;
