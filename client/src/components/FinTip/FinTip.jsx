import React from "react";
import "./finTip.css";

import { data } from "./blogData";

import CardComp from "./CardComp";
const FinTip = () => {
  return (
    <div className="margin-left">
      <div className="card-main">
        {data.map((val, ind) => {
          console.log(val);
          return <CardComp data={val} key={ind} />;
        })}
      </div>
    </div>
  );
};

export default FinTip;
