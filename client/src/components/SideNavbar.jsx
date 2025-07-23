import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sideNavbar.css";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import Person2Icon from "@mui/icons-material/Person2";
import ExitToAppIcon from "@mui/icons-material/ExitToApp"; // signout
import RssFeedIcon from "@mui/icons-material/RssFeed"; // blog
import HomeIcon from "@mui/icons-material/Home"; // home
import ExpandLessIcon from "@mui/icons-material/ExpandLess"; //expand
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const SideNavbar = () => {
  const navbarRef = useRef();
  const navigate = useNavigate();

  const toggleFn = () => {
    // console.log("mouse over/out");
    navbarRef.current.classList.toggle("navbar-active");
  };

  const handleSignOut = () => {
    console.log("hi");
    navigate("/getstarted");
    localStorage.removeItem("jwtToken");
  };

  return (
    <>
      <div
        className="navbar-container"
        ref={navbarRef}
        onMouseOver={toggleFn}
        onMouseOut={toggleFn}
      >
        {/* <div className="expand-btn">
        <ExpandLessIcon />
      </div> */}
        <div className="navbar-top">
          <Link to={"/"} className="navbar-content">
            <span>
              <HomeIcon className="navbar-icons" />
            </span>
            <span className="navbar-text">Home</span>
          </Link>
          <Link to={"/stats"} className="navbar-content">
            <DonutSmallIcon className="navbar-icons" />
            <span className="navbar-text">Stats</span>
          </Link>
          <Link to={"/fintip"} className="navbar-content">
            <LightbulbIcon className="navbar-icons" />
            <span className="navbar-text">FinTip</span>
          </Link>
          {/* <Link className="navbar-content">
            <RssFeedIcon className="navbar-icons" />
            <span className="navbar-text">Blogs</span>
          </Link> */}
        </div>
        <div className="navbar-bottom">
          <span
            className="navbar-content"
            style={{ color: "#337ab7", cursor: "pointer" }}
            onClick={handleSignOut}
          >
            <ExitToAppIcon className="navbar-icons" />
            <span className="navbar-text">Signout</span>
          </span>
          <Link to={"/profile"} className="navbar-content ">
            <Person2Icon className="navbar-icons" />
            <span className="navbar-text">Profile</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
