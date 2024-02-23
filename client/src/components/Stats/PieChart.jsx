import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

const PieChart = () => {
  const data = {
    labels: ["Go", "Python", "Kotlin", "JavaScript", "R", "Swift"],
    datasets: [
      {
        label: "# of Votes",
        data: [55, 25, 22, 20, 5, 15],
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#F101E3",
          "#F7E018",
          "#FA201A",
          "#FE452A",
        ],
        // borderColor: [
        //   "rgba(255,99,132,1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        hoverOffset: 18,
      },
    ],
  };
  const options = {
    responsive: true,
    animation: {
      duration: 1000,
      easing: "easeInOut",
    },
    layout: {
      padding: {
        bottom: 6,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <>
      <div style={{ width: 250, textAlign: "center" }}>
        <Doughnut data={data} width={50} height={50} options={options} />
      </div>
    </>
  );
};

export default PieChart;
