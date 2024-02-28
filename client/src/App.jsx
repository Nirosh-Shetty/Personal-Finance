// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
import Auth from "./components/Auth/Auth";
import Profile from "./components/Profile";
import SideNavbar from "./components/SideNavbar";
import Stats from "./components/Stats/Stats";
import Getstarted from "./components/GetStarted/GetStarted";

import "./App.css";
const App = () => {
  return (
    <>
      <Routes>
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
        <Route path="/getstarted" element={<Getstarted />} />
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
          path="/stats"
          element={
            <>
              <SideNavbar />
              <Stats />
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
