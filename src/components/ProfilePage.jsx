import React from "react";
import malelogo from "../images/male_profile.png";

const ProfilePage = ({ showProfile, onCloseProfile }) => {
  return (
    <>
      {showProfile && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={onCloseProfile}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 w-64 md:w-130 h-full bg-gray-800 shadow-lg text-white p-4 z-50 transform ${
          showProfile ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex-col space-y-20 justify-between items-center">
          <div className="flex justify-center align-middle">
            <img src={malelogo} alt="user photo" className="size-40" />
          </div>
          <div className="flex-col justify-center items-center space-y-[50px]">
            <div>
              <label className="block text-2xl font-extrabold">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="input-class w-full min-h-[50px] font-bold"
              />
            </div>
            <div>
              <label className="block text-2xl font-extrabold">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your contact number"
                className="input-class w-full min-h-[50px] font-bold"
              />
            </div>
            <div>
              <label className="block text-2xl font-extrabold">Location</label>
              <input
                type="text"
                name="location"
                placeholder="Enter your village/district"
                className="input-class w-full min-h-[50px] font-bold"
              />
            </div>
          </div>
          <button className="absolute bottom-4 right-4 bg-red-700 cursor-pointer text-white px-4 py-2 cur rounded-lg shadow-md hover:bg-red-500">
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
