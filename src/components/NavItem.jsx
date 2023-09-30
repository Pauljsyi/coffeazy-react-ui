import React, { useState } from "react";
import { Link } from "react-router-dom";
import cartImg from "../assets/icons/cart.png";
import { Navbar, Button } from "react-bootstrap";
import CartModal from "./CartModal";

const NavItem = (props) => {
  const { coffeeCount, cart, showCart, handleOpen, handleClose, toggleOpen } =
    props;

  console.log(showCart);

  return (
    <>
      <Link className="nav-link" to="/">
        Home
      </Link>

      <Link className="nav-link" to="/menu">
        Menu
      </Link>

      <Link className="nav-link" to="/merch">
        Coffeazy Merch
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

      <Button className="nav-link" onClick={toggleOpen}>
        <img id="cart" src={cartImg} alt="cart" />
        <p>{coffeeCount} items</p>
      </Button>
    </>
  );
};

export default NavItem;
