import React from "react";
import { Line } from "react-chartjs-2";

const TemperatureChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.date),
    datasets: [
      {
        label: "Avg Temperature (°C)",
        data: data.map(d => d.temp),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 2,
        fill: true
      }
    ]
  };

  return <Line data={chartData} />;
};

export default TemperatureChart;
