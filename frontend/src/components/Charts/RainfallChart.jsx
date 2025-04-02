import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RainfallChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.date),
    datasets: [
      {
        label: "Total Rainfall (mm)",
        data: data.map(d => d.rainfall),
        backgroundColor: "rgba(153, 102, 255, 0.6)"
      }
    ]
  };

  return <Bar data={chartData} />;
};

export default RainfallChart;
