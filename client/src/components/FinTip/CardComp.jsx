import React from "react";
import { Link } from "react-router-dom";
import "./cardComp.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const BlogPost = () => {
  return (
    <div className="card-container">
      {/* <span className="s1">blog</span>
      <span className="s2">card</span> */}
      <div className="card">
        <div className="thumbnail">
          <img
            className="left"
            src="https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg"
            alt="Thumbnail"
          />
        </div>
        <div className="right">
          <h1 className="card-h1">
            Why you Need More Magnesium in Your Daily Diet
          </h1>
          <div className="author">
            <img
              src="https://randomuser.me/api/portraits/men/95.jpg"
              alt="Author"
            />
            <h2 className="card-h2">Igor MARTY</h2>
          </div>
          <div className="separator"></div>
          <p className="card-p">
            Magnesium is one of the six essential macro-minerals that is
            required by the body for energy production and synthesis of protein
            and enzymes. It contributes to the development of bones and most
            importantly it is responsible for synthesis of your DNA and RNA. A
            new report that has appeared in the British Journal of Cancer, gives
            you another reason to add more magnesium to your diet...
          </p>
          <h5 className="card-h5">12</h5>
          <h6 className="card-h6">JANUARY</h6>
          <ul className="card-ul">
            {/* <li className='card-li'>
              <i className="fa fa-eye fa-2x"></i>
            </li> */}
            <li className="card-li">
              <i className="fa fa-heart-o fa-2x"></i>
            </li>
            <li className="card-li">
              <i className="fa fa-envelope-o fa-2x"></i>
            </li>
            <li className="card-li">
              <i className="fa fa-share-alt fa-2x"></i>
            </li>
          </ul>
        </div>{" "}
        <div className="fab">
          <Link>
            <ExpandMoreIcon
              sx={{ scale: "5", paddingTop: "4px", color: "white" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
