import React, { useState, useEffect } from "react";
import axios from "axios";
const url2 = "https://coffee-express-api.onrender.com/coffee";

const coffeeData = () => {
  const [coffee, setCoffee] = useState([]);
  const getCoffee = async () => {
    const res = await axios
      .get(url2)
      .then((res) => {
        console.log("response from axios", res.data);
        setCoffee(res.data);
      })
      .catch((e) => {
        console.error("something went wrong ", e);
      });
  };
  useEffect(() => {
    getCoffee();
  }, []);
  console.log("coffee", { coffee });
  return coffee;
};

// console.log("GET COFFEE DATA", coffee);

function getCoffeeData(id) {
  let coffeeData = coffeesArray.find((coffee) => coffee.id === id);

  if (coffeeData == undefined) {
    console.log("coffee data does not exist for ID: " + id);
    return undefined;
  }

  return coffeeData;
}

export default { getCoffeeData };
