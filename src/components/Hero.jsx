import React from "react";
// import video from "./assets/videos/Nicole-Coffee-Cinemagraph.mp4";
import openNow from "../assets/img/signs/open-now.png";

const Hero = () => {
  return (
    <div id="hero">
      <img src={openNow} alt="open now sign" />
      <div className="sign-container">
        <h1>COME VISIT US</h1>
      </div>
      <div className="sign-container">
        <p>341 N PHOENIX BLVD</p>
      </div>
      <div className="sign-container">
        <p>M-F: 8am to 2pm | Sa & Su: 9am to 3pm</p>
      </div>
    </div>
  );
};

export default Hero;
