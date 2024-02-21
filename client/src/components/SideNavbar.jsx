import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./sideNavbar.css";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import Person2Icon from "@mui/icons-material/Person2";
import ExitToAppIcon from "@mui/icons-material/ExitToApp"; // signout
import RssFeedIcon from "@mui/icons-material/RssFeed"; // blog
import HomeIcon from "@mui/icons-material/Home"; // home
import ExpandLessIcon from "@mui/icons-material/ExpandLess"; //expand
const SideNavbar = () => {
  const navbarRef = useRef();
  const toggleFn = () => {
    console.log("mouse over/out");
    navbarRef.current.classList.toggle("navbar-active");
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
          <Link className="navbar-content">
            <span>
              <HomeIcon className="navbar-icons" />
            </span>
            <span className="navbar-text">Home</span>
          </Link>
          <Link className="navbar-content">
            <DonutSmallIcon className="navbar-icons" />
            <span className="navbar-text">Stats</span>
          </Link>
          <Link className="navbar-content">
            <RssFeedIcon className="navbar-icons" />
            <span className="navbar-text">Blogs</span>
          </Link>
        </div>
        <div className="navbar-bottom">
          <Link className="navbar-content">
            <ExitToAppIcon className="navbar-icons" />
            <span className="navbar-text">Signout</span>
          </Link>
          <Link className="navbar-content ">
            <Person2Icon className="navbar-icons" />
            <span className="navbar-text">Profile</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
