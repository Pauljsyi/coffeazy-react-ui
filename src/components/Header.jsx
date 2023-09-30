import React, { useState, useEffect } from "react";

import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/img/logo/coffeazy-logos.png";
import FullNavigation from "./FullNavigation";
import Hamburger from "./Hamburger";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    if (width > 769) {
      setWidth(window.innerWidth);
      setIsMobile(false);
    } else {
      setWidth(window.innerWidth);
      setIsMobile(true);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand href="/">
          <img id="logo-img" src={logo} alt="logo" />
        </Navbar.Brand>
        {isMobile ? <Hamburger /> : <FullNavigation />}
      </Container>
    </Navbar>
  );
};

export default Header;
