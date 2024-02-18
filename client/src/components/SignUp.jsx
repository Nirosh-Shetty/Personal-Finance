import React, { useState } from "react";
import "./signup.css"; // Import your CSS file

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    houseNumber: "",
    street: "",
    city: "",
    state: "",
    password: "",
    confirmPassword: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log(formData);
  };

  return (
    <div className="multistep-form">
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div className="step">
            <h2>Step 1: Personal Information</h2>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              placeholder="First Name"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              placeholder="Last Name"
              onChange={handleInputChange}
            />
            <span className="span">
              <button onClick={nextStep} className="next">
                Next
              </button>
            </span>
          </div>
        )}

        {currentStep === 2 && (
          <div className="step">
            <h2>Step 2: Contact Information</h2>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              placeholder="Phone Number"
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleInputChange}
            />
            <span className="span">
              <button onClick={prevStep} className="previous">
                Previous
              </button>
              <button onClick={nextStep} className="next">
                Next
              </button>
            </span>
          </div>
        )}

        {currentStep === 3 && (
          <div className="step">
            <h2>Step 3: Address Information</h2>
            <input
              type="text"
              name="houseNumber"
              value={formData.houseNumber}
              placeholder="House Number"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="street"
              value={formData.street}
              placeholder="Street"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              placeholder="City"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              placeholder="State"
              onChange={handleInputChange}
            />
            <span className="span">
              <button onClick={prevStep} className="previous">
                Previous
              </button>
              <button onClick={nextStep} className="next">
                Next
              </button>
            </span>
          </div>
        )}

        {currentStep === 4 && (
          <div className="step">
            <h2>Step 4: Create Password</h2>
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              placeholder="Confirm Password"
              onChange={handleInputChange}
            />
            <span className="span">
              <button onClick={prevStep} className="previous">
                Previous
              </button>
              <button type="submit" className="next">
                Submit
              </button>
            </span>
          </div>
        )}
      </form>
    </div>
  );
};

export default SignUp;
