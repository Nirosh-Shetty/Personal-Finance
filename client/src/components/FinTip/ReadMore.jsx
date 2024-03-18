import React from "react";
import { data } from "./blogData";
import Footer from "../Footer/Footer";
import "./readMore.css";
import { useLocation, useParams } from "react-router-dom";

const ReadMore = () => {
  const { id } = useParams();
  const location = useLocation();
  const { color } = location.state;
  return (
    <>
      <div className="margin-left readmore-container">
        <div className="readmore-top">
          <h3>
            {data[id].date} {data[id].month} {data[id].year}
          </h3>
          <div
            className="readmore-top-right"
            style={{ backgroundColor: color }}
          >
            <img src={data[id].authorImg} alt="" />
            <h3>{data[id].author}</h3>
          </div>
        </div>
        <h1>{data[id].title}</h1>
        <img src={data[id].thumbnail} className="readmore-img"></img>

        <div dangerouslySetInnerHTML={{ __html: data[id].description }} />
      </div>
    </>
  );
};

export default ReadMore;
