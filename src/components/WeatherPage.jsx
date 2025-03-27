import React from "react";
import SearchBar from "./SearchBar";
import WeatherForcast from "./WeatherForcast";

const WeatherPage = ({ setCity, weatherData }) => {
  return (
    <>
      <SearchBar setCity={setCity} weatherData={weatherData} />
      <WeatherForcast weatherData={weatherData}/>
    </>
  );
};

export default WeatherPage;
