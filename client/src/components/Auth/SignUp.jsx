import React from "react";
import { useRecoilState } from "recoil";
import { toggleAuthAtom } from "../../recoil/atom/toggleAuthAtom";
function SignUp() {
  const [type, setType] = useRecoilState(toggleAuthAtom);
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    localStorage.removeItem("jwtToken");
    fetch("http://localhost:8000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((response) => {
        if (!response.ok)
          throw new Error(`Some HTTP error : ${response.status}`);
        return response.json();
      })
      .then((data) => {
        console.log(`status code :${data}`);
        setType("signIn");
      })
      .catch((error) => {
        console.error(`some error in fetching : ${error}`);
      });
  };

  return (
    <div className="form-container sign-up-container">
      <form className="form" onSubmit={handleOnSubmit}>
        <h1 className="h1">Create Account</h1>
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
        <span className="span">or use your email for registration</span>
        <input
          className="input "
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
          required="true"
        />
        <input
          className="input "
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
          required="true"
        />
        <input
          className="input "
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
          required="true"
        />
        {/* <input
          className="input "
          type="password"
          name="confirmPassword"
          // value={state.password}
          onChange={handleChange}
          placeholder="Confirm Password"
        /> */}
        <button className="button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
