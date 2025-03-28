import { useEffect, useState } from "react";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, BarElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(LineElement, BarElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const API_KEY = "7482feb76e9cbff85e84e9f7f98ba6ce"; // Replace with your API Key

function WeatherdashBoard() {
  const [city, setCity] = useState("India");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const fetchWeather = async (location) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      alert("City not found. Please try again.");
    }
    setLoading(false);
  };

  const handleSearch = () => {
    if (search.trim() !== "") {
      setCity(search);
      fetchWeather(search);
    }
  };

  if (loading) return <p className="text-center text-gray-600">Loading weather data...</p>;
  if (!weatherData) return <p className="text-center text-red-600">Error loading weather.</p>;

  // Extracting data for graphs
  const labels = weatherData.list.slice(0, 7).map((entry) => entry.dt_txt.split(" ")[1]);
  const temperatures = weatherData.list.slice(0, 7).map((entry) => entry.main.temp);
  const humidity = weatherData.list.slice(0, 7).map((entry) => entry.main.humidity);
  const windSpeed = weatherData.list.slice(0, 7).map((entry) => entry.wind.speed);

  // Chart Data
  const temperatureData = {
    labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temperatures,
        borderColor: "#34D399",
        backgroundColor: "rgba(52, 211, 153, 0.3)",
        tension: 0.4,
      },
    ],
  };

  const humidityData = {
    labels,
    datasets: [
      {
        label: "Humidity (%)",
        data: humidity,
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.3)",
        tension: 0.4,
      },
    ],
  };

  const windData = {
    labels,
    datasets: [
      {
        label: "Wind Speed (m/s)",
        data: windSpeed,
        borderColor: "#FBBF24",
        backgroundColor: "rgba(251, 191, 36, 0.3)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-green-700 mb-4">Weather Forecast</h2>

      {/* Search Bar */}
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Enter City or Country"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded-lg w-full"
        />
        <button onClick={handleSearch} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Search
        </button>
      </div>

      {/* Weather Details */}
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`}
          alt="Weather Icon"
          className="w-16 h-16"
        />
        <div>
          <p className="text-lg font-semibold text-gray-800">
            {weatherData.city.name}: {weatherData.list[0].main.temp}°C
          </p>
          <p className="text-sm text-gray-600">{weatherData.list[0].weather[0].description}</p>
        </div>
      </div>

      {/* Temperature Graph */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-blue-600">Temperature Trends</h2>
        <Line data={temperatureData} />
      </div>

      {/* Humidity Graph */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-blue-600">Humidity Trends</h2>
        <Bar data={humidityData} />
      </div>

      {/* Wind Speed Graph */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600">Wind Speed Trends</h2>
        <Line data={windData} />
      </div>
    </div>
  );
}

export default WeatherdashBoard;