import React, { useState, useEffect } from "react";
import "./percentageChart.css";

const PercentageComp = () => {
  const [perChartArray, setPerChartArray] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    fetch("http://localhost:8000/api/getdata", {
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

  return (
    <>
      {perChartArray.map((user, id) => (
        <div className="percentage-comp" key={id}>
          <div className="left">
            <span className="show-percentage">{user.percentage}</span>
            <span>{user.category_type}</span>
          </div>
          <span className="right">{user.amount}</span>
        </div>
      ))}
    </>
  );
};

export default PercentageComp;
