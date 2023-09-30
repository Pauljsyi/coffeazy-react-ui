import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import first from "../assets/img/carousel/pexels-nao-triponez-129207.jpg";
import second from "../assets/img/carousel/pexels-cottonbro-studio-4829072.jpg";
import third from "../assets/img/carousel/pexels-susanne-jutzeler-sujufoto-2309058.jpg";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="h-100" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="w-100" src={first} alt="First slide" />
        <Carousel.Caption>
          <h3>NOW OPEN</h3>
          <p>341 N PHOENIX BLVD</p>
          <p>OPERATING HOURS: </p>
          <p>M-F: 8am to 2pm | Sa & Su: 9am to 3pm</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100" src={second} alt="Second slide" />

        <Carousel.Caption style={{ color: "black" }}>
          <h3>Try Our Local Bestseller</h3>
          <p>take a bag</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100 h-50" src={third} alt="Third slide" />

        <Carousel.Caption>
          <h3>Like us on Facebook</h3>
          <p>and we'll give you a free 1lb bag of our special beans</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
