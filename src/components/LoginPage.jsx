import React from "react";
import loginimage from '../images/loginpageImage.jpg'

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center  bg-gray-400 h-[100vh] w-[100vw] absolute inset-0 bg-cover bg-center " style={{ backgroundImage: `url(${loginimage})` }}>
      
       <div className="min-w-[600px] min-h-[400px] max-w-md  text-white p-8 rounded-lg shadow-lg z-50  ">
        <h2 className="text-5xl text-center text-gray-500 mb-6 font-extrabold">Login</h2>
        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold text-gray-700 text-[20px]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 w-full p-2 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block  font-bold text-gray-700 text-[20px]">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 w-full p-2 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline font-extrabold text-[20px]">
            Sign Up
          </a>
        </p>
      </div>
      
    </div>
  );
};

export default LoginPage;