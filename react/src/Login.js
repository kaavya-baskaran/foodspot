import "./styles.css";
import Restaurants from "./Restaurants";
import Signup from "./Signup";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";
import { Carousel, Button, Container, Row } from "react-bootstrap";

export default function Login() {
  const [userName, setuserName] = useState("");
  const [passWord, setpassWord] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const fetch = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/fetching", {
        username: userName,
        password: passWord,
      })
      .then((res) => {
        console.log("successfuly fetched");
        console.log("res=", res.data, "pass=", passWord);
        if (res.data == passWord) {
          setAuthenticated(true);
          localStorage.setItem("userName", userName);
          localStorage.setItem("authenticated", true);
          console.log("auth :", localStorage.getItem("authenticated"));
          console.log("hi");
        }
      })
      .catch((err) => {
        console.log("error at fetching from login");
        console.log("error", err);
      });
  };

  return (
    <div>
      {localStorage.getItem("authenticated") ? (
        <Restaurants />
      ) : (
        <div className="loginpage">
          <Carousel
            indicators={true}
            controls={true}
            className="carousel-login data-interval='200'"
          >
            <Carousel.Item>
              <img
                className="carousel-img-login"
                src={require("./assets/login-4.jpeg")}
                alt="image1"
              />
              <div class="carousel-caption d-none d-md-block">
                <h3>Farm fresh meat and veggies</h3>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-img-login"
                src={require("./assets/login-1.jpeg")}
                alt="image2"
              />
              <div class="carousel-caption d-none d-md-block">
                <h3>Prepared with love</h3>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-img-login"
                src={require("./assets/login-2.jpeg")}
                alt="image3"
              />
              <div class="carousel-caption d-none d-md-block">
                <h3>In an authentic way</h3>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-img-login"
                src={require("./assets/login-3.jpeg")}
                alt="image3"
              />
              <div class="carousel-caption d-none d-md-block">
                <h3>On ur way!</h3>
              </div>
            </Carousel.Item>
          </Carousel>
          <div className="inner-login">
            <form className="login-form">
              <div>
                <label>Username :</label>
                <input
                  className="login-input"
                  onChange={(e) => setuserName(e.target.value)}
                  type="text"
                  name="username"
                />
              </div>
              <br />
              <div>
                <label> PassWord : </label>
                <input
                  className="login-input"
                  onChange={(e) => setpassWord(e.target.value)}
                  type="password"
                  name="password"
                />
              </div>
              <br />
              <button
                className="submit-button"
                type="submit"
                onClick={(e) => {
                  fetch(e);
                }}
              >
                {" "}
                Submit{" "}
              </button>
              <Link to="/signup">
                <button className="submit-button" name="signup-btn">
                  create Account
                </button>
              </Link>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
