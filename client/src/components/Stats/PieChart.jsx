import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useState,useEffect } from "react";



const PieChart = () => {
  const [catArray, setcatArray] = useState();
  const [amtArray, setamtArray] = useState();
  useEffect(() => {
  const token = localStorage.getItem("jwtToken");
    fetch("http://localhost:8000/api/getdata", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setcatArray(data.catArray);
        setamtArray(data.amtArray);
      })
      .catch((error) => console.log(error));
    }, []);

  
  const data = {
    labels: catArray,
    datasets: [
      {
        label: "Amount",
        data: amtArray,
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#808000",
          "#F7E018",
          "#FA201A",
          "#BDB76B",
          "#7CFC00",
          "#F101E3",
          "#00FF00",
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
