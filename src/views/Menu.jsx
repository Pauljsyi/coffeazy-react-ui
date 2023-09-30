import React, { useState, useEffect } from "react";
import { Container, CardGroup } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import CardGrid from "../containers/CardGrid";

const Menu = () => {
  return (
    <div className="container row mx-auto d-flex justify-content-center">
      <h1>Menu</h1>

      <CardGrid />
    </div>
  );
};

export default Menu;
