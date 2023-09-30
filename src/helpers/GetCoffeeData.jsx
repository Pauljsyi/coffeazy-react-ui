import React, { useState, useEffect } from "react";
import axios from "axios";
const url2 = "https://coffee-express-api.onrender.com/coffee";

const coffeeData = () => {
  const [coffee, setCoffee] = useState([]);
  const getCoffee = async () => {
    const res = await axios
      .get(url2)
      .then((res) => {
        setCoffee(res.data);
      })
      .catch((e) => {
        console.error("something went wrong ", e);
      });
  };
  useEffect(() => {
    getCoffee();
  }, []);
  return coffee;
};

function getCoffeeData(id) {
  let coffeeData = coffeesArray.find((coffee) => coffee.id === id);

  if (coffeeData == undefined) {
    return undefined;
  }

  return coffeeData;
}

export default { getCoffeeData };
