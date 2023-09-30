import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";

const DropDown = () => {
  return (
    <>
      <NavDropdown id="nav-dropdown" title="Account">
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
      </NavDropdown>
    </>
  );
};

export default DropDown;
