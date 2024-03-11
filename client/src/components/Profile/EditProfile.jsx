import { useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./profile.css";

import Button from "@mui/material/Button";

const Profile = () => {
  const navigate = useNavigate();
  const [editedUserData, seteditedUserData] = useState();
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    fetch("http://localhost:8000/api/getuserdata", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) return response.json();
        else if (response.status >= 400 && response.status <= 410) {
          navigate("/getstarted");
        } else console.log("server error:, status code : " + response.status);
      })
      .then((data) => {
        // console.log(data);
        seteditedUserData(data);
      })
      .catch((error) => {
        console.error(`error in fectching data: ${error}`);
      });
  }, []);
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    seteditedUserData((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(editedUserData);
  };
  const handleSubmit = (e) => {
    fetch("http://localhost:8000/api/profileupdated", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
      body: JSON.stringify(editedUserData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Profile updated successfully");
          setFetchedUserData(editedUserData);
          setEditMode(false);
        } else {
          console.error("Failed to update profile");
        }
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };
  return (
    <div className="container bootstrap snippets bootdey margin-left">
      {editedUserData ? (
        <div className="row">
          <div className="profile-nav col-md-3">
            <div className="panel">
              <div className="user-heading round">
                <a href="#">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt=""
                  />
                </a>
                <h1>{editedUserData.username}</h1>
                <p>{editedUserData.email}</p>
              </div>

              <ul className="nav nav-pills nav-stacked">
                <li>
                  <Link to="/profile">
                    <i className="fa fa-user"></i> Profile
                  </Link>
                </li>

                <li className="active">
                  <a href="#">
                    <i className="fa fa-edit"></i> Edit profile
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-cog"></i> Settings
                    {/* <span className="label label-warning pull-right r-activity">
                    9
                  </span> */}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="profile-info col-md-9">
            <div className="panel">
              {/* <form>
                <textarea
                  placeholder="Whats in your mind today?"
                  rows="2"
                  className="form-control input-lg p-text-area"
                ></textarea>
              </form>
              <footer className="panel-footer">
                <button className="btn btn-warning pull-right">Add Note</button>
                <ul className="nav nav-pills">
                  <li>
                    <a href="#">
                      <i className="fa fa-map-marker"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-camera"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className=" fa fa-film"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-microphone"></i>
                    </a>
                  </li>
                </ul>
              </footer> */}
            </div>
            <div className="panel">
              <div className="bio-graph-heading">
                <input
                  type="text"
                  name="aboutus"
                  value={editedUserData.aboutus}
                  onChange={handleChange}
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                  }}
                ></input>
              </div>
              <div className="panel-body bio-graph-info">
                <h1>Bio Graph</h1>
                <div className="row">
                  <div className="bio-row">
                    <p>
                      <span> Name </span>:{" "}
                      <input
                        onChange={handleChange}
                        type="text"
                        value={editedUserData.name}
                        name="name"
                      ></input>
                    </p>
                  </div>
                  {/* <div className="bio-row">
                    <p>
                      <span>Last Name </span>: Smith
                    </p>
                  </div> */}
                  <div className="bio-row">
                    <p>
                      <span>Email </span>:{" "}
                      <input
                        onChange={handleChange}
                        type="text"
                        value={editedUserData.email}
                        name="email"
                      ></input>
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Birthday</span>:{" "}
                      <input
                        onChange={handleChange}
                        type="text"
                        value={editedUserData.dob}
                        name="dob"
                      ></input>
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Gender </span>:{" "}
                      <input
                        onChange={handleChange}
                        type="text"
                        value={editedUserData.gender}
                        name="gender"
                      ></input>
                    </p>
                  </div>
                  {/* <div className="bio-row">
                    <p>
                      <span>Email </span>: jsmith@flatlab.com
                    </p>
                  </div> */}
                  <div className="bio-row">
                    <p>
                      <span>Mobile </span>:{" "}
                      <input
                        onChange={handleChange}
                        type="text"
                        value={editedUserData.phone}
                        name="phone"
                      ></input>
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Address </span>:{" "}
                      <input
                        onChange={handleChange}
                        type="text"
                        value={editedUserData.address}
                        name="address"
                      ></input>
                    </p>
                  </div>
                </div>
                <Button
                  variant="text"
                  //   color={"success"}
                  sx={{ fontSize: "1.6rem", color: "#fbc02d" }}
                  onClick={handleSubmit}
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default Profile;
