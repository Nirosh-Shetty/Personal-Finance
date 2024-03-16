import React from "react";
import "./insights.css";
import { useState, useEffect } from "react";
// import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Insights = () => {
  const [ratio, setratio] = useState();
  const [maxIncomeCat, setmaxIncomeCat] = useState([]);
  const [maxExpenseCat, setmaxExpenseCat] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    fetch("http://localhost:8000/api/statsdata", {
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
        // console.log(data.transactionHistory);
        setratio(data.ratio);
        setmaxIncomeCat(data.maxIncomeSpent);
        setmaxExpenseCat(data.maxExpenseSpent);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="ratio insight-box">
        <h1> Income Expense ratio</h1>
        <span>{ratio}</span>
      </div>
      <div className="top-income insight-box">
        <h1>
          <ArrowDropUpIcon className="arrow-up" /> Top Income Source
        </h1>
        <span>{maxIncomeCat}</span>
      </div>
      <div className="most-trans insight-box">
        <h1>
          <ArrowDropDownIcon className="arrow-down" /> Mostly Spent On
        </h1>
        <span>{maxExpenseCat}</span>
      </div>
    </>
  );
};

export default Insights;
