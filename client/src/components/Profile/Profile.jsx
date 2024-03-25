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
                <a href="#">
                  <img
                    src={`data:image/png;base64,${fetchedUserData.imageData}`}
                    alt=""
                  />
                </a>
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
            {/* Other profile information */}
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default Profile;
