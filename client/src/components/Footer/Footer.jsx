import React from "react";

import "./footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="margin-left footer-containter">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="/img/logo.png" alt="" />
          <h4>Personal Finance</h4>
        </div>
        <div className="footer-links">
          <Link to={"/"}>Home</Link>
          <Link to={"/getstarted"}>About us</Link>
          <Link to={"/stats"}>Stats</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <h6>©2024 PersonalFinance™</h6>
      </div>
    </div>
  );
};

export default Footer;
