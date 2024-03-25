import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./cardComp.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const colors = [
  "#7fb3d5", // Light blue
  "#85c1a9", // Light green
  "#e5989b", // Light red
  "#f4d03f", // Light yellow
  "#7fb3d5", // Light teal
  "#c39bd3", // Light purple
  "#f4a460", // Light orange
  "#7fb3d5", // Light cyan
  "#85c1a9", // Light indigo
  "#f1948a", // Light pink
  "#bdc3c7", // Light gray
  "#909497", // Light dark gray
];

const CardComp = ({ data }) => {
  const [bgColor, setbgColor] = useState();

  useEffect(() => {
    setbgColor(colors[data.id % colors.length]);
    // () => {
    // let id = data.id;
    // if (data.id > colors.length) {
    // return colors[data.id % colors.length];
    // } else return colors[id];
    // });
  }, [data.id]);

  return (
    <div className="card-container">
      {/* <span className="s1">blog</span>
      <span className="s2">card</span> */}
      <div className="card">
        <div className="card-thumbnail">
          <img className="left" src={data.thumbnail} alt="Thumbnail" />
        </div>
        <div className="right">
          <h1 className="card-h1">{data.title}</h1>
          <div className="author" style={{ backgroundColor: bgColor }}>
            <img src={data.authorImg} alt="Author" />
            <h2 className="card-h2">{data.author}</h2>
          </div>
          <div className="separator"></div>
          <p className="card-p">{data.shortDescription}</p>
          <div className="time">
            <h5 className="card-h5">{data.date}</h5>
            <h6 className="card-h6">
              {data.month} <span className="year">{data.year}</span>
            </h6>
          </div>
          <ul className="card-ul">
            {/* <li className='card-li'>
              <i className="fa fa-eye fa-2x"></i>
            </li> */}
            <li className="card-li">
              <i className="fa fa-heart-o fa-2x"></i>
            </li>
            {/* <li className="card-li">
              <i className="fa fa-envelope-o fa-2x"></i>
            </li> */}
            <li className="card-li">
              <i className="fa fa-share-alt fa-2x"></i>
            </li>
          </ul>
        </div>
        <div className="fab">
          <Link to={`/readmore/${data.id}`} state={{ bgColor }}>
            <ExpandMoreIcon
              sx={{ scale: "5", paddingTop: "4px", color: "white" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardComp;
