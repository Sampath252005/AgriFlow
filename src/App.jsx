import { useState ,useEffect} from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route ,useLocation} from "react-router-dom";
import Home from "./components/Home";
import DashboardPage from "./components/dashBoard_Page";
import IrrigationPlanner from "./components/irrigationPlannerPage";
import ReportPage from "./components/reportPage";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp"
import LoginPage from "./components/LoginPage"
import WeatherPage from "./components/WeatherPage"
import Loading from './images/loading.gif';

const API_KEY = "4cefbccbd0be41f297f41318251402";
function App() {
  const [city, setCity] = useState("Udupi");
  const [weatherData, setWeatherData] = useState(null);
  const[loading,setLoading]=useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const location =useLocation();
  const hideNavBar =location.pathname==="/"||location.pathname==="/SignUp";

  useEffect(() => {
    fetchWeather(city);
  }, [city]);
  const fetchWeather = async (city) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Conditionally Render NavBar */}
      {!hideNavBar && <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}

      {/* Main Content */}
            <div
        className={`flex-grow transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-40 md:translate-x-80" : "translate-x-0"
        }`}
      >
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/SignUP" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/Weather"  element={<WeatherPage setCity={setCity} weatherData={weatherData}/>} />
          <Route path="/irrigation-planner" element={<IrrigationPlanner />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </div>
    </div>
  );
}

// Wrap App with Router in main entry file (index.js or main.jsx)
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
export default AppWrapper;