import React from "react";
import PropTypes from "prop-types";

function WeatherForecast({ weatherData }) {
  if (!weatherData || !weatherData.forecast) {
    return <p className="text-white">Loading 3-day forecast...</p>;
  }

  return (
    <div className="bg-gradient-to-r from-green-900 via-green-700 to-green-500 rounded-xl p-6 shadow-xl m-5 font-bold">
      <h2 className="text-white text-2xl font-extrabold mb-4">3-DAY FORECAST</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {weatherData.forecast.forecastday.map((day, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-md rounded-lg shadow-lg transition hover:scale-105 "
          >
            <span className="text-white text-lg font-semibold">
              {new Date(day.date).toLocaleDateString("en-US", { weekday: "long" })}
            </span>
            <img src={day.day.condition.icon} alt="forecast icon" className="w-12 h-12 drop-shadow-lg" />
            <span className="text-white font-bold text-lg">
              {day.day.maxtemp_c}° / {day.day.mintemp_c}°
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

WeatherForecast.propTypes = {
  weatherData: PropTypes.object,
};

export default WeatherForecast;
