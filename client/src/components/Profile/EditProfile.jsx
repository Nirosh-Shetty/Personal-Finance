import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./profile.css";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

import DialogActions from "@mui/material/DialogActions";

import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Profile = () => {
  const navigate = useNavigate();
  const [editedUserData, setEditedUserData] = useState();
  const [backupData, setbackupData] = useState();
  const [open, setOpen] = useState(false);

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
        setEditedUserData(data);
        setbackupData(data);
      })
      .catch((error) => {
        console.error(`error in fetching data: ${error}`);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setEditedUserData(backupData);
    setOpen(false);
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
          setOpen(false);
        } else {
          console.error("Failed to update profile");
        }
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  const handleCloseDialog = () => {
    setOpen(false);
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
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="profile-info col-md-9">
            <div className="panel">
              <div
                className="bio-graph-heading"
                style={{
                  margin: "auto",
                  // display: "flex",
                  // alignItems: "center",
                  // justifyContent: "center",
                }}
              >
                <input
                  type="text"
                  name="aboutus"
                  value={editedUserData.aboutus}
                  onChange={handleChange}
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    width: "80%",
                    height: "80%",
                    textAlign: "center",
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
                        className="edit-profile-input"
                        onChange={handleChange}
                        type="text"
                        value={editedUserData.name}
                        name="name"
                      ></input>
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Email </span>:{" "}
                      <input
                        className="edit-profile-input"
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
                        className="edit-profile-input"
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
                        className="edit-profile-input"
                        onChange={handleChange}
                        type="text"
                        value={editedUserData.gender}
                        name="gender"
                      ></input>
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Mobile </span>:{" "}
                      <input
                        className="edit-profile-input"
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
                        className="edit-profile-input"
                        onChange={handleChange}
                        type="text"
                        value={editedUserData.address}
                        name="address"
                      ></input>
                    </p>
                  </div>
                </div>
                <Button
                  variant="soft"
                  color="success"
                  sx={{ padding: "10px 20px", fontWeight: "bold" }}
                  onClick={() => setOpen(true)}
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
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
            sx={{ fontSize: "1.8rem", fontWeight: "bolder" }}
          >
            Save Changes?
          </Typography>
          <Typography
            id="modal-desc"
            textColor="text.tertiary"
            sx={{ marginBottom: "30px", fontSize: "1.6rem" }}
          >
            Do you really want to save Changes. Onces saved you can not undo!
          </Typography>
          <DialogActions>
            <Button
              onClick={handleCancel}
              sx={{ padding: "10px 15px" }}
              autoFocus
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              sx={{ padding: "10px 15px" }}
              autoFocus
            >
              Save Changes
            </Button>
          </DialogActions>
        </Sheet>
      </Modal>
    </div>
  );
};

export default Profile;
