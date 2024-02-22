// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import SideNavbar from "./components/SideNavbar";
import Stats from "./components/Stats";

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
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
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
