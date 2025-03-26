import React from "react";
import WeatherChart from "./Charts/weatherChart";
import MoistureChart from "./Charts/MoistureChart";
import SoilCompositionChart from "./Charts/SoilCompositionChart";
import RainfallChart from "./Charts/RainfallChart";
import SoilHealthChart from "./Charts/SoilHealthChart";

const data = [
  { title: "Weather", temperature: "50°C", humidity: "60%", rainfall: "30mm" },
  { title: "Soil", moisture: "40%", ph: "6.5", nitrogen: "High" },
  { title: "Water Quality", ph: "7.2", turbidity: "Moderate", tds: "500 ppm" },
];

const dashBoard_Page=()=> {
  return (
    <>
    <div className="p-6">
      <h1 className="text-4xl font-bold text-green-700 mb-6">DashBoard</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-green-400 text-white p-6 rounded-2xl shadow-lg border border-gray-300"
          >
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>

            {/* Weather Info */}
            {item.title === "Weather" && (
              <>
                <div className="text-3xl font-bold">{item.temperature}</div>
                <div className="flex mt-4">
                  <div className="bg-green-500 p-2 rounded-lg flex-1 mr-2 text-center">
                    Humidity: {item.humidity}
                  </div>
                  <div className="bg-green-500 p-2 rounded-lg flex-1 text-center">
                    Rainfall: {item.rainfall}
                  </div>
                </div>
              </>
            )}

            {/* Soil Info */}
            {item.title === "Soil" && (
              <>
               <div className="text-3xl font-bold">{item.moisture}</div>
                <div className="flex mt-4">
                  <div className="bg-green-500 p-2 rounded-lg flex-1 mr-2 text-center">
                    ph: {item.ph}
                  </div>
                  <div className="bg-green-500 p-2 rounded-lg flex-1 text-center">
                    Nitrogen: {item.nitrogen}
                  </div>
                </div>
               </>
            )}

            {/* Water Quality Info */}
            {item.title === "Water Quality" && (
              <>
                <div className="text-3xl font-bold">{item.ph}</div>
                <div className="flex mt-4">
                  <div className="bg-green-500 p-2 rounded-lg flex-1 mr-2 text-center">
                    Humidity: {item.turbidity}
                  </div>
                  <div className="bg-green-500 p-2 rounded-lg flex-1 text-center">
                    Rainfall: {item.tds}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <WeatherChart/>
      <MoistureChart/>
      <SoilCompositionChart/>
      <RainfallChart/>
      <SoilHealthChart/>

    </div>
    </>
  );
}

export default dashBoard_Page;
