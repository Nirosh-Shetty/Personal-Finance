import Charts from "./Charts";
import "./stats.css";

import React, { useEffect, useState } from "react";

export default function Stats() {
  const [data, setdata] = useState();
  const [currentStatsType, setcurrentStatsType] = useState("total");
  // const [total, settotal] = useState();
  // const [totalIncome, settotalIncome] = useState();
  // const [totalExpense, settotalExpense] = useState();
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
        setdata(data);
        // settotal(data.total);
        // settotalIncome(data.totalIncome);
        // settotalExpense(data.totalExpense);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleClick = (prop) => {
    setcurrentStatsType(prop);
  };
  return (
    <>
      {data ? (
        <div className="margin-left stats-container">
          <button
            onClick={() => handleClick("total")}
            className={currentStatsType === "total" ? "total active" : "total"}
            // style={{ color: `${data.total >= 0 ? "green" : "red"}` }}
          >
            ₹ {data.total}
            <span className="amount-type"> Balance</span>
          </button>
          <button
            onClick={() => handleClick("income")}
            className={
              currentStatsType === "income" ? "income active" : "income"
            }
          >
            ₹ {data.totalIncome}
            <span className="amount-type">Income</span>
          </button>
          <button
            onClick={() => handleClick("expense")}
            className={
              currentStatsType === "expense" ? "expense active" : "expense"
            }
          >
            ₹ {data.totalExpense}
            <span className="amount-type">Expense</span>
          </button>
          <Charts data={data} type={currentStatsType} />
        </div>
      ) : (
        <h1 style={{ margin: "100px", fontSize: "5rem" }}>Loading...</h1>
      )}

      {/* <div className="long-chart">
        <BarChart />
      </div> */}
    </>
  );
}
