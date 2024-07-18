import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [fetchedUserData, setfetchedUserData] = useState(null);

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
        } else console.log("Server error:, status code: " + response.status);
      })
      .then((data) => {
        console.log("Fetched user data:", data);
        console.log(data.imageData);
        setfetchedUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="container bootstrap snippets bootdey margin-left">
      {fetchedUserData ? (
        <div className="row">
          <div className="profile-nav col-md-3">
            <div className="panel">
              <div className="user-heading round">
                <label htmlFor="edit-pfp">
                  <img src={fetchedUserData.pfp_path} alt="" />
                </label>
                <h1>{fetchedUserData.username}</h1>
                <p>{fetchedUserData.email}</p>
              </div>

              <ul className="nav nav-pills nav-stacked">
                <li className="active">
                  <a href="#">
                    <i className="fa fa-user"></i> Profile
                  </a>
                </li>

                <li>
                  <Link to="/editprofile">
                    <i className="fa fa-edit"></i> Edit profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="profile-info col-md-9">
            <div className="panel">
              <form>
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
              </footer>
            </div>
            <div className="panel">
              <div className="bio-graph-heading">
                "{fetchedUserData.aboutus}"
              </div>
              <div className="panel-body bio-graph-info">
                <h1>Bio Graph</h1>
                <div className="row">
                  <div className="bio-row">
                    <p>
                      <span> Name </span>: {fetchedUserData.name}
                    </p>
                  </div>
                  {/* <div className="bio-row">
                    <p>
                      <span>Last Name </span>: Smith
                    </p>
                  </div> */}
                  <div className="bio-row">
                    <p>
                      <span>Email </span>: {fetchedUserData.email}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Birthday</span>: {fetchedUserData.dob}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Gender </span>: {fetchedUserData.gender}
                    </p>
                  </div>
                  {/* <div className="bio-row">
                    <p>
                      <span>Email </span>: jsmith@flatlab.com
                    </p>
                  </div> */}
                  <div className="bio-row">
                    <p>
                      <span>Mobile </span>: {fetchedUserData.phone}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Address </span>: {fetchedUserData.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <div className="row">
              <div className="col-md-6">
                <div className="panel">
                  <div className="panel-body">
                    <div className="bio-chart">
                      <div
                        style={{
                          display: "inline",
                          width: "100px",
                          height: "100px",
                        }}
                      >
                        <canvas width="100" height="100px"></canvas>
                        <input
                          className="knob"
                          data-width="100"
                          data-height="100"
                          data-displayprevious="true"
                          data-thickness=".2"
                          value="35"
                          data-fgcolor="#e06b7d"
                          data-bgcolor="#e8e8e8"
                          style={{
                            width: "54px",
                            height: "33px",
                            position: "absolute",
                            verticalAlign: "middle",
                            marginTop: "33px",
                            marginLeft: -"77px",
                            border: "0px",
                            fontWeight: "bold",
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontStretch: "normal",
                            fontSize: "20px",
                            lineHeight: "normal",
                            fontFamily: "Arial",
                            textAlign: "center",
                            color: "rgb(224, 107, 125)",
                            padding: "0px",
                            WebkitAppearance: "none",
                            background: "none",
                          }}
                        />
                      </div>
                    </div>
                    <div className="bio-desk">
                      <h4 className="red">Envato Website</h4>
                      <p>Started : 15 July</p>
                      <p>Deadline : 15 August</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="panel">
                  <div className="panel-body">
                    <div className="bio-chart">
                      <div
                        style={{
                          display: "inline",
                          width: "100px",
                          height: "100px",
                        }}
                      >
                        <canvas width="100" height="100px"></canvas>
                        <input
                          className="knob"
                          data-width="100"
                          data-height="100"
                          data-displayprevious="true"
                          data-thickness=".2"
                          value="63"
                          data-fgcolor="#4CC5CD"
                          data-bgcolor="#e8e8e8"
                          style={{
                            width: "54px",
                            height: "33px",
                            position: "absolute",
                            verticalAlign: "middle",
                            marginTop: "33px",
                            marginLeft: "-77px",
                            border: "0px",
                            fontWeight: "bold",
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontStretch: "normal",
                            fontSize: "20px",
                            lineHeight: "normal",
                            fontFamily: "Arial",
                            textAlign: "center",
                            color: "rgb(76, 197, 205)",
                            padding: "0px",
                            WebkitAppearance: "none",
                            background: "none",
                          }}
                        />
                      </div>
                    </div>
                    <div className="bio-desk">
                      <h4 className="terques">ThemeForest CMS </h4>
                      <p>Started : 15 July</p>
                      <p>Deadline : 15 August</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="panel">
                  <div className="panel-body">
                    <div className="bio-chart">
                      <div
                        style={{
                          display: "inline",
                          width: "100px",
                          height: "100px",
                        }}
                      >
                        <canvas width="100" height="100px"></canvas>
                        <input
                          className="knob"
                          data-width="100"
                          data-height="100"
                          data-displayprevious="true"
                          data-thickness=".2"
                          value="75"
                          data-fgcolor="#96be4b"
                          data-bgcolor="#e8e8e8"
                          style={{
                            width: "54px",
                            height: "33px",
                            position: "absolute",
                            verticalAlign: "middle",
                            marginTop: "33px",
                            marginLeft: "-77px",
                            border: "0px",
                            fontWeight: "bold",
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontStretch: "normal",
                            fontSize: "20px",
                            lineHeight: "normal",
                            fontFamily: "Arial",
                            textAlign: "center",
                            color: "rgb(150, 190, 75)",
                            padding: "0px",
                            WebkitAppearance: "none",
                            background: "none",
                          }}
                        />
                      </div>
                    </div>
                    <div className="bio-desk">
                      <h4 className="green">VectorLab Portfolio</h4>
                      <p>Started : 15 July</p>
                      <p>Deadline : 15 August</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="panel">
                  <div className="panel-body">
                    <div className="bio-chart">
                      <div
                        style={{
                          display: "inline",
                          width: "100px",
                          height: "100px",
                        }}
                      >
                        <canvas width="100" height="100px"></canvas>
                        <input
                          className="knob"
                          data-width="100"
                          data-height="100"
                          data-displayprevious="true"
                          data-thickness=".2"
                          value="50"
                          data-fgcolor="#cba4db"
                          data-bgcolor="#e8e8e8"
                          style={{
                            width: "54px",
                            height: "33px",
                            position: "absolute",
                            verticalAlign: "middle",
                            marginTop: "33px",
                            marginLeft: "-77px",
                            border: "0px",
                            fontWeight: "bold",
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontStretch: "normal",
                            fontSize: "20px",
                            lineHeight: "normal",
                            fontFamily: "Arial",
                            textAlign: "center",
                            color: "rgb(203, 164, 219)",
                            padding: "0px",
                            WebkitAppearance: "none",
                            background: "none",
                          }}
                        />
                      </div>
                    </div>
                    <div className="bio-desk">
                      <h4 className="purple">Adobe Muse Template</h4>
                      <p>Started : 15 July</p>
                      <p>Deadline : 15 August</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
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
