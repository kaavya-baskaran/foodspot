import Login from "./Login";
import { useState } from "react";
import axios from "axios";
import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Signup() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [email, setemail] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const addUser = (event) => {
    event.preventDefault();
    console.log("here");
    if (password == cpassword) {
      axios
        .post("http://localhost:3000/signUp", {
          username: username,
          password: password,
          email: email,
        })
        .then(() => {
          console.log("success");
          setOpen(true);
        })
        .catch(() => {
          console.log("Error! not inserted.");
        });
    } else {
      // setOpen(true);
      console.log("Oops! password and confirm password mismatch.");
    }
  };

  return (
    <div className="signuppage">
      <form>
        <label className="signin-form">UserName :</label>
        <input
          type="text"
          name="username"
          onChange={(e) => setusername(e.target.value)}
        ></input>
        <br />
        <label className="signin-form">Password :</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setpassword(e.target.value)}
        ></input>
        <br />
        <label className="signin-form">Confirm Password :</label>
        <input
          type="password"
          name="cpassword"
          onChange={(e) => setcpassword(e.target.value)}
        ></input>
        <br />
        <label className="signin-form">Email :</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setemail(e.target.value)}
        ></input>
        <br />

        <button
          className="sign-button"
          variant="outlined"
          type="submit"
          onClick={(e) => {
            addUser(e);
          }}
        >
          {" "}
          Submit{" "}
        </button>
        <Link to="/login">
          <button className="sign-button">login</button>
        </Link>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Account created successfuly!
          </Alert>
        </Snackbar>
        {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            Error at creating Account!
          </Alert>
        </Snackbar> */}
      </form>
    </div>
  );
}
