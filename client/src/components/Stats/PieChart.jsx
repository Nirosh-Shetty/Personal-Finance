import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

const PieChart = ({ type }) => {
  console.log(type);
  const [catArray, setCatArray] = useState([]);
  const [amtArray, setAmtArray] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    fetch("http://localhost:8000/api/statsdata", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCatArray(data.catArray);
        setAmtArray(data.amtArray);
      })
      .catch((error) => console.log(error));
  }, []);

  // Function to generate fading background colors
  const generateFadingColors = (length, type) => {
    const colors = [];
    const step = 255 / length;
    for (let i = 0; i < length; i++) {
      let color;
      let hue;
      if (type === "expense") {
        hue = (i * 50) / length;
      } else if (type === "income") {
        hue = 130 - (i * 80) / length; // Adjusting hue for green fading
      } else {
        hue = (i * 250) / length; // Adjusting hue for black fading
      }
      color = `hsl(${hue}, 100%, 38%)`;
      colors.push(color);
    }
    return colors;
  };

  const backgroundColors = generateFadingColors(catArray.length, type);

  const data = {
    labels: catArray,
    datasets: [
      {
        label: "Amount",
        data: amtArray,
        backgroundColor: backgroundColors,
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
    <div style={{ width: 250, textAlign: "center" }}>
      <Doughnut data={data} width={50} height={50} options={options} />
    </div>
  );
};

export default PieChart;
