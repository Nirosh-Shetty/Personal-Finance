import "./App.css";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="/singup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
