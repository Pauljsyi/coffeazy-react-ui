import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
const url = "https://api.sampleapis.com/coffee/hot";
const url2 = "https://coffee-express-api.onrender.com/coffee";
const text_url = "localhost:8000/coffee";

const CardGrid = () => {
  const [coffee, setCoffee] = useState([]);
  const getCoffee = async () => {
    const res = await axios
      .get(url2)
      .then((res) => {
        // console.log("response from axios", res.data);
        setCoffee(res.data);
      })
      .catch((e) => {
        console.error("something went wrong ", e);
      });
  };

  //   const getCoffee = async () => {
  //   const res = await axios
  //     .get("https://api.sampleapis.com/coffee/iced")
  //     .then((res) => {
  //       console.log(typeof res.data);
  //       setCoffee(res.data);
  //     })
  //     .catch((e) => {
  //       console.error("something went wrong ", e);
  //     });
  // };

  useEffect(() => {
    getCoffee();
  }, []);
  // console.log(coffee);
  return (
    <>
      <Col className=" g-4 d-flex flex-wrap">
        {coffee.map((item, idx) => (
          <ProductCard key={item.id} idx={idx} coffee={item} />
        ))}
      </Col>
    </>
  );
};

export default CardGrid;
