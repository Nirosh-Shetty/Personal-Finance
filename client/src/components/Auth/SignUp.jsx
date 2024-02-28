import React from "react";
function SignUp() {
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

    const { name, email, password } = state;
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
        />
        <input
          className="input "
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="input "
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
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
