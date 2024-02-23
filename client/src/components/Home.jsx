import React from "react";
import { useState } from "react";
import "./home.css";

const Home = () => {
  console.log("home sweet home");
  const [formDataI, setFormDataI] = useState({
    iAmount:"",
    iCategory:"",
    iNote:"",
    iDate:"",
    iTime:""
  });

  const handleInputChangeI = (e) => {
    const { name, value } = e.target;
    setFormDataI({ ...formDataI, [name]: value });
  };

  const handleSubmitI = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    fetch("http://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataI),
  })
};

    const [formDataE, setFormDataE] = useState({
      eAmount:"",
      eCategory:"",
      eNote:"",
      eDate:"",
      eTime:""
    });
  
    const handleInputChangeE = (e) => {
      const { name, value } = e.target;
      setFormDataE({ ...formDataE, [name]: value });
    };
  
    const handleSubmitE = (e) => {
      e.preventDefault();
      // Handle form submission here, e.g., send data to a server
      fetch("http://localhost:8000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataE),
      })
    
  };
  return (
    <>
      <div className="multistep-form">
      <div className="step">
            <h2>Income</h2>
            <input
              type="text"
              name="iAmount"
              value={formDataI.iAmount}
              placeholder="Amount"
              onChange={handleInputChangeI}
            />
            <input
              type="text"
              name="iCategory"
              value={formDataI.iCategory}
              placeholder="Category"
              onChange={handleInputChangeI}
            />
            <input
              type="text"
              name="iNote"
              value={formDataI.iNote}
              placeholder="Note"
              onChange={handleInputChangeI}
            />
            <input
              type="date"
              name="iDate"
              value={formDataI.iDate}
              placeholder="Date"
              onChange={handleInputChangeI}
            />
            <input
              type="time"
              name="iTime"
              value={formDataI.iTime}
              placeholder="Time"
              onChange={handleInputChangeI}
            />
            <button onClick={handleSubmitI}>Post</button>
          </div>
          </div>

      <div className="multistep-form">
      <div className="step">
            <h2>Expense</h2>
            <input
              type="text"
              name="eAmount"
              value={formDataE.eAmount}
              placeholder="Amount"
              onChange={handleInputChangeE}
            />
            <input
              type="text"
              name="eCategory"
              value={formDataE.eCategory}
              placeholder="Category"
              onChange={handleInputChangeE}
            />
            <input
              type="text"
              name="eNote"
              value={formDataE.eNote}
              placeholder="Note"
              onChange={handleInputChangeE}
            />
            <input
              type="date"
              name="eDate"
              value={formDataE.eDate}
              placeholder="Date"
              onChange={handleInputChangeE}
            />
            <input
              type="time"
              name="eTime"
              value={formDataE.eTime}
              placeholder="Time"
              onChange={handleInputChangeE}
            />
            <button onClick={handleSubmitE}>Post</button>
          </div>
          </div>
    </>
  );
};

export default Home;
