import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HumidityChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.date),
    datasets: [
      {
        label: "Avg Humidity (%)",
        data: data.map(d => d.humidity),
        backgroundColor: "rgba(54, 162, 235, 0.6)"
      }
    ]
  };

  return <Bar data={chartData} />;
};

export default HumidityChart;
