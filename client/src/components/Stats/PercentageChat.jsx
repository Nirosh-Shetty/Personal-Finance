import React from "react";
import "./percentageChart.css";

const PercentageComp = () => {
  return (
    <div className="percentage-comp">
      <div className="left">
        <span className="show-percentage">56%</span>
        <span> 🍜 foood</span>
      </div>
      <span className="right">₹4524</span>
    </div>
  );
};
const PercentageChat = () => {
  return (
    <div className="percent-comp-contain">
      <PercentageComp />
      <PercentageComp />
      <PercentageComp />
      <PercentageComp />
      <PercentageComp />
      <PercentageComp />
      <PercentageComp />
      <PercentageComp />
      <PercentageComp />
      <PercentageComp />
      <PercentageComp />
      <PercentageComp />
    </div>
  );
};

export default PercentageChat;
