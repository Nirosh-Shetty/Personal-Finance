// App.js
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
import Auth from "./components/Auth/Auth";
import Profile from "./components/Profile/Profile";
import SideNavbar from "./components/SideNavbar";
import Stats from "./components/Stats/Stats";
import Getstarted from "./components/GetStarted/GetStarted";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import EditProfile from "./components/Profile/EditProfile";
import "./App.css";
import FinTip from "./components/FinTip/FinTip";
const App = () => {
  // useEffect(() => {
  //   const token = localStorage.getItem("jwtToken");
  //   fetch("http://localhost:8000/api/pagesauth", {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "content-type": "application/json",
  //     },
  //   }).then((response) => {
  //     if (!response.ok) {
  //     }
  //   });
  // }, []);

  return (
    <>
      <Routes>
        <Route path="/getstarted" element={<Getstarted />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/"
          element={
            <>
              <SideNavbar />
              <Home />
            </>
          }
        />
        <Route path="/auth" element={<Auth />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route
          path="/profile"
          element={
            <>
              <SideNavbar />
              <Profile />
            </>
          }
        />
        <Route
          path="/editprofile"
          element={
            <>
              <SideNavbar />
              <EditProfile />
            </>
          }
        />
        <Route
          path="/stats"
          element={
            <>
              <SideNavbar />
              <Stats />
            </>
          }
        />
        <Route
          path="/fintip"
          element={
            <>
              <SideNavbar />
              <FinTip />
            </>
          }
        />
        {/* <Route
          path="/blog"
          element={
            <>
              <SideNavbar />
              <Blog />
            </>
          }
        /> */}
      </Routes>
    </>
  );
};

export default App;
