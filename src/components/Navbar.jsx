import React, { useState, useRef, useEffect, useContext } from "react";
import CartModal from "./CartModal";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";
import NavItem from "./NavItem";
import logo from "../assets/img/logo/coffeazy-logos.png";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const cart = useContext(CartContext);
  const [showNavSecond, setShowNavSecond] = useState(false);
  const [showAnimated, setShowAnimated] = useState(false);
  // const [open, setOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleOpen = () => {
    setShowCart(!showCart);
  };

  const handleOpen = () => {
    setShowCart(true);
  };

  const handleClose = () => {
    setShowCart(false);
  };

  const coffeeCount = cart.items.reduce(
    (sum, coffee) => sum + coffee.quantity,
    0
  );

  // CUSTOM HOOK TO DETECT OUTSIDE CLICK
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowNavSecond(false);
          setShowAnimated(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <>
      <MDBNavbar
        sticky="top"
        expand="lg"
        light
        bgColor="light"
        ref={wrapperRef}
      >
        <MDBContainer fluid>
          <MDBNavbarBrand href="/" id="nav-brand">
            <img id="logo-img" src={logo} alt="logo" />
          </MDBNavbarBrand>
          {/* <MDBNavbarToggler
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler> */}
          <MDBNavbarToggler
            type="button"
            className="ms-auto"
            id="hamburger-btn"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              setShowAnimated(!showAnimated);
              setShowNavSecond(!showNavSecond);
            }}
          >
            <div className={`animated-icon1 ${showAnimated && "open"}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </MDBNavbarToggler>
          <MDBCollapse
            className="bg-light my-5"
            id="collapse-menu"
            navbar
            show={showNavSecond}
          >
            <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
              <NavItem
                coffeeCount={coffeeCount}
                cart={cart}
                showCart={showCart}
                handleOpen={handleOpen}
                toggleOpen={toggleOpen}
                handleClose={handleClose}
              />
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      {showCart ? (
        <CartModal
          handleOpen={handleOpen}
          cart={cart}
          show={showCart}
          handleClose={handleClose}
          coffeeCount={coffeeCount}
        />
      ) : null}
    </>
  );
};

export default Navbar;
