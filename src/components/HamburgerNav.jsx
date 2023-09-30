import React, { useState, useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

const HamburgerNav = () => {
  const [showAnimated, setShowAnimated] = useState(false);
  return (
    <>
      <section className="mb-3">
        <MDBNavbar>
          <MDBContainer fluid>
            <MDBNavbarToggler
              type="button"
              className="ms-auto"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowAnimated(!showAnimated)}
            >
              <div className={`animated-icon1 ${showAnimated && "open"}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>
        <MDBCollapse show={showAnimated}>
          <div className="bg-light shadow-3 p-4">
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
          </div>
        </MDBCollapse>
      </section>
    </>
  );
};

export default HamburgerNav;
