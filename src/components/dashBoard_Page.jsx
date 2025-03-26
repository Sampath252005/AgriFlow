import React from "react";

const dashBoard_Page = () => {
  return (
    <div className="flex flex-col space-y-10 text-white">
      <h1 className="text-5xl font-serif font-extrabold text-green-600">DashBoard</h1>
      <div className="grid grid-cols-2 gap-15 ">
        <div className="flex flex-col  bg-green-500 p-5 rounded-2xl space-y-2">
          <h1 className="text-4xl font-bold">Weather</h1>
          <div className="flex flex-col space-y-5 ">
            <span className="flex w-full min-w-[20px] text-5xl bg-green-400 rounded-2xl p-4 items-center justify-center">50&#xB0;c</span>
            <div className="grid grid-cols-2 gap-3">
            <span className=" bg-green-400 rounded-2xl p-4 items-center justify-center">Humidity</span>
            <span className=" bg-green-400 rounded-2xl p-4 items-center justify-center">RainFall</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col  bg-green-500 p-5 rounded-2xl space-y-2">
          <h1 className="text-4xl font-bold">Weather</h1>
          <div className="flex flex-col space-y-2 ">
            <span className="flex w-full min-w-[20px] text-5xl bg-green-400 rounded-2xl p-4 items-center justify-center">50&#xB0;c</span>
            <div className="grid grid-cols-2 gap-3">
            <span className=" bg-green-400 rounded-2xl p-4 items-center justify-center">Humidity</span>
            <span className=" bg-green-400 rounded-2xl p-4 items-center justify-center">RainFall</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col  bg-green-500 p-5 rounded-2xl space-y-2">
          <h1 className="text-4xl font-bold">Weather</h1>
          <div className="flex flex-col space-y-2 ">
            <span className="flex w-full min-w-[20px] text-5xl bg-green-400 rounded-2xl p-4 items-center justify-center">50&#xB0;c</span>
            <div className="grid grid-cols-2 gap-3">
            <span className=" bg-green-400 rounded-2xl p-4 items-center justify-center">Humidity</span>
            <span className=" bg-green-400 rounded-2xl p-4 items-center justify-center">RainFall</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col  bg-green-500 p-5 rounded-2xl space-y-2">
          <h1 className="text-4xl font-bold">Weather</h1>
          <div className="flex flex-col space-y-2 ">
            <span className="flex w-full min-w-[20px] text-5xl bg-green-400 rounded-2xl p-4 items-center justify-center">50&#xB0;c</span>
            <div className="grid grid-cols-2 gap-3">
            <span className=" bg-green-400 rounded-2xl p-4 items-center justify-center">Humidity</span>
            <span className=" bg-green-400 rounded-2xl p-4 items-center justify-center">RainFall</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashBoard_Page;
