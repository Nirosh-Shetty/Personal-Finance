import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function CurvyLineChart() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Monthly Revenue",
        data: [1200, 1400, 1100, 1600, 1300, 1700, 1500],
        borderColor: "#007D9C",
        backgroundColor: "rgba(0, 125, 156, 0.2)", // Adjust the alpha value for transparency
        pointBackgroundColor: "#007D9C",
        pointBorderColor: "#007D9C",
        lineTension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 1000,
      easing: "easeInOut",
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        backgroundColor: "#5b5b5b",
        bodyColor: "#fff",
        titleColor: "#fff",
        displayColors: false,
        callbacks: {
          label: function (tooltipItem) {
            return `Revenue: $${tooltipItem.formattedValue}`;
          },
        },
      },
    },
  };

  return (
    // <div style={{ width: 400, textAlign: "center" }}>
    <Line data={data} options={options} />
    // </div>
  );
}
