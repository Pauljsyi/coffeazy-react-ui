import React, { useState, useEffect } from "react";
import Slider from "../components/Slider";
import Hero from "../components/Hero";
import Hamburger from "../components/Hamburger";

const Home = () => {
  return (
    <div>
      <Hero />
      <Slider />
    </div>
  );
};

export default Home;
