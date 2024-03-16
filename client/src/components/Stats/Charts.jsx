import React from "react";

import LineChart from "./LineChart";
import PieChart from "./PieChart";
import PercentageChat from "./PercentageChat";
import Insights from "./Insights";

const Charts = ({ data, type }) => {
  return (
    <>
      <div className="insights">
        <Insights />
      </div>
      <div className="line-chart">
        <LineChart />
      </div>
      <div className="combined-charts">
        <div className="pie-chart">
          <PieChart type={type} />
        </div>
        <div className="percentage">
          <PercentageChat type={type} />
        </div>
      </div>
    </>
  );
};

export default Charts;
