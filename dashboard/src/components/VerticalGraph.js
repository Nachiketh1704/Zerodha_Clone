import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Holdings - Investment vs Current Value",
    },
  },
};

export function VerticalGraph({ data }) {
  // Provide default data structure if data is not provided
  const defaultData = {
    labels: [],
    datasets: [],
  };

  const chartData = data || defaultData;

  return <Bar options={options} data={chartData} />;
}
