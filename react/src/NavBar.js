import Recp from "./Recp";
import { useEffect, useState } from "react";
import Login from "./Login";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Restaurants from "./Restaurants";

export default function NavBar(props) {
  let data = props.data;
  let search = props.search;
  let debounce = props.debounce;
  let userName = localStorage.getItem("userName");
  let passWord = localStorage.getItem("passWord");
  let authenticated = localStorage.getItem("authenticated");
  console.log("authenticated from nav :", authenticated);
  //const [authenticated, setAuthenticated] = useState(props.authenticated);

  // useEffect(() => {
  //   setAuthenticated(false);
  // }, []);

  const handlelogin = () => {
    // localStorage.setItem("authenticated", false);
  };

  const handleclick = () => {
    localStorage.clear();
    //document.getElementsByClassName("logout").innerHTML = "Login";
  };
  return (
    <div>
      <Navbar className="navbar">
        <h1 className="heading"> 🍴 Choose Your Favourite Food </h1>
        <div>
          <ul className="nav-option">
            <li className="nav-item">
              <input
                type="search"
                className="search"
                placeholder="Search"
                onChange={(e) => debounce(e, 500)}
              />
            </li>
            <li className="nav-item">
              <button
                onClick={() => window.location.reload()}
                className="back-button"
              >
                {" "}
                Home
              </button>
            </li>
            <li className="nav-item">
              {authenticated ? (
                <div className="log-details">
                  <h3 className="username">😸{userName}</h3>
                  <Link to="/">
                    <button onClick={handleclick} className="logbutton">
                      Logout
                    </button>
                  </Link>
                </div>
              ) : (
                <Link to="/login">
                  <button onClick={handlelogin} className="logbutton">
                    Login
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </Navbar>
    </div>
  );
}
