import React, { useState } from "react";
import { data } from "./blogData";
import "./readMore.css";
import CardComp from "./CardComp";
import FinQuotes from "./FinQuotes";
import "./finTip.css";
const MainComponent = () => {
  const [load, setLoad] = useState(4);

  const handleClickLoadMore = () => {
    setLoad((prevLoad) => prevLoad + 3);
  };

  // Check if there are more items to load
  const hasMoreItems = load < data.length;

  return (
    <div className="margin-left">
      <FinQuotes />
      <div className="card-main">
        {data.slice(0, load).map((val, ind) => (
          <CardComp data={val} key={ind} />
        ))}
      </div>
      {/* Render Load More button only if there are more items to load */}
      {hasMoreItems && (
        <div className="loadmore" onClick={handleClickLoadMore}>
          Load More
        </div>
      )}
    </div>
  );
};

export default MainComponent;
