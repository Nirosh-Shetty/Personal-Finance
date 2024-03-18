import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    userInput: "",
    userPassword: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    localStorage.removeItem("jwtToken");
    console.log(JSON.stringify(state));

    //handling fetch api
    fetch("http://localhost:8000/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((response) => {
        // if (!response.ok) throw new Error(`http error! ${response.status}`);
        return response.json();
      })
      .then((data) => {
        const check = data.success;
        if (check === false) {
          alert(data.message);
        } else {
          localStorage.setItem("jwtToken", data.token);
          navigate("/");
        }
      })
      .catch((error) => console.error(`catch error:   ${error}`));
  };

  return (
    <div className="form-container sign-in-container">
      <form className="form" onSubmit={handleOnSubmit}>
        <h1 className="h1">Sign in</h1>
        <div className="social-container">
          <a href="#" className="social a">
            <i className="  fa-facebook-f" />
          </a>
          <a href="#" className="social a">
            <i className="  fa-google-plus-g" />
          </a>
          <a href="#" className="social a">
            <i className="  fa-linkedin-in" />
          </a>
        </div>
        <span className="span">or use your account</span>
        <input
          className="input "
          type="text"
          placeholder="Email, Phone or Username"
          name="userInput"
          value={state.userInput}
          onChange={handleChange}
          required="true"
        />
        <input
          className="input "
          type="password"
          name="userPassword"
          placeholder="Password"
          value={state.userPassword}
          onChange={handleChange}
          required="true"
          // autoComplete="false"
        />
        <Link to="/forgotpassword" className="a" href="#">
          Forgot your password?
        </Link>
        <button className="button">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
