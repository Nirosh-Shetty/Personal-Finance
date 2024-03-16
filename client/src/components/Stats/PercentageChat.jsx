import React, { useState, useEffect } from "react";
import "./percentageChart.css";

const PercentageComp = ({ type }) => {
  const [perChartArray, setPerChartArray] = useState([]);

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
        setPerChartArray(data.perChartArray);
      })
      .catch((error) => console.log(error));
  }, []);

  const calculateColor = (index) => {
    let hue;
    if (type === "expense") {
      hue = (index * 50) / perChartArray.length;
    } else if (type === "income") {
      hue = 130 - (index * 80) / perChartArray.length; // Adjusting hue for green fading
    } else {
      hue = (index * 150) / perChartArray.length; // Adjusting hue for black fading
    }
    return `hsl(${hue}, 100%, 45%)`; // Using HSL color space for rainbow effect
  };

  return (
    <>
      <div className="percent-comp-contain">
        {perChartArray.map((user, id) => (
          <div className="percentage-comp" key={id}>
            <div className="left">
              <span
                className="show-percentage"
                style={{ backgroundColor: calculateColor(id) }}
              >
                {user.percentage}
              </span>
              <span>{user.category_type}</span>
            </div>
            <span className="right">₹{user.amount}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default PercentageComp;
