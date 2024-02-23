import React from "react";
import "./insights.css";
// import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Insights = () => {
  return (
    <>
      <div className="ratio insight-box">
        <h1> Income Expnese ratio</h1>
        <span>1.5</span>
      </div>
      <div className="top-income insight-box">
        <h1>
          <ArrowDropUpIcon className="arrow-down" /> Top Income Source
        </h1>
        <span>Salary</span>
      </div>
      <div className="most-trans insight-box">
        <h1>
          <ArrowDropUpIcon className="arrow-up" /> Highest Exprenditure catagory
        </h1>
        <span>Food</span>
      </div>
    </>
  );
};

export default Insights;
