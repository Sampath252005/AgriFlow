import React, { useEffect, useState } from "react";
import WeatherChart from "./Charts/weatherChart";
import MoistureChart from "./Charts/MoistureChart";
import SoilCompositionChart from "./Charts/SoilCompositionChart";
import RainfallChart from "./Charts/RainfallChart";
import SoilHealthChart from "./Charts/SoilHealthChart";

const DashBoard_Page = ({ weatherData }) => {
  const [weatherChartData, setWeatherChartData] = useState([]);
  const [moistureData, setMoistureData] = useState([]);
  const [rainfallData, setRainfallData] = useState([]);

  useEffect(() => {
    if (weatherData && weatherData.current) {
      // Fetch Weather Data
      setWeatherChartData([
        { label: "Temperature (°C)", value: weatherData.current.temp_c },
        { label: "Humidity (%)", value: weatherData.current.humidity },
        { label: "Wind Speed (km/h)", value: weatherData.current.wind_kph },
      ]);

      // Add Hardcoded Soil & Moisture Data
      setMoistureData([
        { label: "Soil Moisture (%)", value: 40 }, // Example Value
        { label: "Soil pH", value: 6.5 },
        { label: "Nitrogen Level", value: "High" }, // Example
      ]);

      setRainfallData([
        { label: "Rainfall (mm)", value: 30 }, // Example Value
        { label: "Rain Intensity", value: "Moderate" }, // Additional Data
      ]);
    }
  }, [weatherData]); // Runs whenever `weatherData` updates

  if (!weatherData || !weatherData.current) {
    return <p className="text-center text-gray-600">Loading weather data...</p>;
  }

  return (
    <>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-green-700 mb-4">🌍 Weather Dashboard</h1>

        {/* Weather Data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {weatherChartData.map((item, index) => (
            <div key={index} className="bg-blue-400 text-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{item.label}</h3>
              <p className="text-xl">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Soil & Moisture Data */}
        <h2 className="text-2xl font-bold text-green-700 mt-6">🌱 Soil & Moisture Data</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moistureData.map((item, index) => (
            <div key={index} className="bg-green-400 text-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{item.label}</h3>
              <p className="text-xl">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Rainfall Data */}
        <h2 className="text-2xl font-bold text-green-700 mt-6">🌧️ Rainfall Data</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {rainfallData.map((item, index) => (
            <div key={index} className="bg-gray-500 text-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{item.label}</h3>
              <p className="text-xl">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-5">
        <WeatherChart data={weatherChartData} />
        <MoistureChart data={moistureData} />
        <SoilCompositionChart />
        <SoilHealthChart />
      </div>
    </>
  );
};

export default DashBoard_Page;
