import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown, Dropdown } from "react-bootstrap";
import hamburger from "../assets/icons/hamburger.svg";

const Hamburger = () => {
  const getWindowSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log("width: ", width);
    console.log("height: ", height);
  };
  return (
    <>
      <NavDropdown
        id="nav-dropdown"
        title={
          <img
            className="hamburger-svg"
            width={30}
            src={hamburger}
            alt="hamburger menu"
          />
        }
        align="end"
      >
        <div className="mx-3">
          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/menu">
            Menu
          </Link>

          <Link className="nav-link" to="/shop">
            Shop Coffeazy
          </Link>

          <Link className="nav-link" to="/upload">
            Upload Product
          </Link>
          <Link className="nav-link" to="/login">
            Log In
          </Link>

          <Link className="nav-link" to="/register">
            Create Account
          </Link>
          <NavDropdown.Divider />

          <Link className="nav-link" to="/contact">
            Contact us
          </Link>
        </div>
      </NavDropdown>
    </>
  );
};

export default Hamburger;
