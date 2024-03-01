import React, { useState } from "react";
function SignIn() {
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
    const data = new FormData(event.currentTarget);

    const userData = {
      email: data.get("userInput"),
      password: data.get("userPassword"),
    };
    console.log(JSON.stringify(userData));

    //handling fetch api
    fetch("http://localhost:8000/api/signin/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const check = data.message;
        if (check === false) {
          alert("Password Incorrect");
        } else {
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
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social a">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social a">
            <i className="fab fa-linkedin-in" />
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
        />
        <input
          className="input "
          type="password"
          name="userPassword"
          placeholder="Password"
          value={state.userPassword}
          onChange={handleChange}
        />
        <a className="a" href="#">
          Forgot your password?
        </a>
        <button className="button">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
