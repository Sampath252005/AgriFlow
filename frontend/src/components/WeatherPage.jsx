import React from "react";
import SearchBar from "./SearchBar";
import WeatherForcast from "./WeatherForcast";
import loadingIcon from "../images/loading2.gif"


const WeatherPage = ({ setCity, weatherData ,loading}) => {
  return (
    <div className="flex flex-col min-h-screen bg-whitep-4 gap-5 xl:flex-row pb-2 xl:pb-2  bg-green-100">
      {/* <Navbar /> */}
      <div className="flex flex-col gap-5 w-full">
        { loading?(<div className="flex justify-center items-center h-86"><img src={loadingIcon} alt="loading" className="w-30 h-30"/></div>):
         ( <>
         <SearchBar setCity={setCity} weatherData={weatherData} />
          <WeatherForcast weatherData={weatherData} />
          </>
        )
          
        }
        
      </div>
    </div>
  );
};

export default WeatherPage;
