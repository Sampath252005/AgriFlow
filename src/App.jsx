import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DashboardPage from "./components/dashBoard_Page";
import IrrigationPlanner from "./components/irrigationPlannerPage";
import ReportPage from "./components/reportPage";
import NavBar from "./components/NavBar";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div >
        {/* Navbar */}
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* Main Content (Moves when menu opens) */}
        <div
          className={`flex-grow p-4 transition-all duration-300 ${
            menuOpen ? "ml-64" : "ml-0"
          }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/irrigation-planner" element={<IrrigationPlanner />} />
            <Route path="/report" element={<ReportPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;