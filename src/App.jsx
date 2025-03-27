import { useState } from "react";
import { BrowserRouter as Router, Routes, Route ,useLocation} from "react-router-dom";
import Home from "./components/Home";
import DashboardPage from "./components/dashBoard_Page";
import IrrigationPlanner from "./components/irrigationPlannerPage";
import ReportPage from "./components/reportPage";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp"
import LoginPage from "./components/LoginPage"
import WeatherPage from "./components/WeatherPage"


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location =useLocation();
  const hideNavBar =location.pathname==="/"||location.pathname==="/SignUp";


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
          <Route path="/Weather" element={<WeatherPage/>} />
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