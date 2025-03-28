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
      setWeatherChartData([
        { label: "Temperature", value: weatherData.current.temp_c },
        { label: "Humidity", value: weatherData.current.humidity },
        { label: "Wind Speed", value: weatherData.current.wind_kph },
      ]);

      setMoistureData([
        { label: "Soil Moisture", value: 40 }, // Replace with actual data
        { label: "Soil pH", value: 6.5 },
      ]);

      setRainfallData([
        { label: "Rainfall", value: 30 }, // Replace with real data
      ]);
    }
  }, [weatherData]); // Runs whenever `weatherData` updates

  if (!weatherData || !weatherData.current) {
    return <p className="text-center text-gray-600">Loading weather data...</p>;
  }

  return (
    <>
      <div className="p-6">
        <h1 className="text-4xl font-bold text-green-700 mb-6">Dashboard</h1>

        {/* Weather Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <div className="bg-green-400 text-white p-6 rounded-2xl shadow-lg border border-gray-300">
            <h2 className="text-xl font-bold mb-2">Weather</h2>
            <div className="text-3xl font-bold">{weatherData.current.temp_c}°C</div>
            <div className="flex mt-4">
              <div className="bg-green-500 p-2 rounded-lg flex-1 mr-2 text-center">
                Humidity: {weatherData.current.humidity}%
              </div>
              <div className="bg-green-500 p-2 rounded-lg flex-1 text-center">
                Wind Speed: {weatherData.current.wind_kph} km/h
              </div>
            </div>
          </div>
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
