import React from "react";
import { Nav } from "react-bootstrap";
import Cart from "../views/Cart";
import DropDown from "./DropDown";
import NavItem from "./NavItem";

const FullNavigation = () => {
  return (
    <>
      <Nav>
        <NavItem />
        <DropDown />
        <Cart />
      </Nav>
    </>
  );
};

export default FullNavigation;
