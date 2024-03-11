import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "./stats.css";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import PercentageChat from "./PercentageChat";
import Insights from "./Insights";
import React, { useEffect, useState } from "react";

export default function Stats() {
  
  const [total, settotal] = useState();
  const [totalIncome, settotalIncome] = useState();
  const [totalExpense, settotalExpense] = useState();
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
        settotal(data.total);
        settotalIncome(data.totalIncome);
        settotalExpense(data.totalExpense);
      })
      .catch((error) => console.log(error));
    }, []);

  
  return (
    <div className="margin-left stats-container">
      <button className="total">
        {total}<span className="amount-type">Total</span>
      </button>
      <button className="income">
        {totalIncome}<span className="amount-type">Income</span>
      </button>
      <button className="expense">
        {totalExpense}<span className="amount-type">Expense</span>
      </button>

      <div className="insights">
        <Insights />
      </div>
      <div className="line-chart">
        <LineChart />
      </div>
      <div className="pie-chart">
        <PieChart />
      </div>
      <div className="percentage">
        <PercentageChat />
      </div>
      {/* <div className="long-chart">
        <BarChart />
      </div> */}
    </div>
  );
}
