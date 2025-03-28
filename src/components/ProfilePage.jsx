import React, { useEffect, useState } from "react";
import malelogo from "../images/male_profile.png";
import { useNavigate } from "react-router-dom";

const ProfilePage = ({ showProfile, onCloseProfile }) => {
  const navigate = useNavigate();

  // State to store profile details
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    // Load profile details from local storage when component mounts
    const storedProfile = JSON.parse(localStorage.getItem("profile"));
    if (storedProfile) {
      setProfile(storedProfile);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify(profile)); // Save to local storage
    alert("Profile saved successfully!");
  };

  const handleLogout = () => {
    localStorage.removeItem("profile"); // Clear stored profile data on logout
    setProfile({ fullName: "", email: "", phone: "" }); // Reset state
    navigate("/");
  };

  return (
    <>
      {showProfile && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={onCloseProfile}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 w-64 md:w-130 h-full bg-gray-800 shadow-lg text-white p-10 z-50 transform ${
          showProfile ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex-col space-y-10 justify-between items-center">
          <div className="flex justify-center align-middle">
            <img src={malelogo} alt="user photo" className="size-40" />
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-2xl font-extrabold">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={profile.fullName}
              onChange={handleChange}
              className="w-full min-h-[40px] font-bold text-white p-2 rounded-md"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-2xl font-extrabold">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full min-h-[40px] font-bold text-white p-2 rounded-md"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-2xl font-extrabold">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="w-full min-h-[40px] font-bold text-white p-2 rounded-md"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-400"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="bg-red-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-500"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
