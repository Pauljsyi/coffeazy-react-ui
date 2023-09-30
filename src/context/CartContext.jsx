import { createContext, useState, useEffect } from "react";
import axios from "axios";
// const url2 = "https://coffee-express-api.onrender.com/coffee";
const url2 = "http://localhost:8000/coffee";
// import { productsArray, getProductData } from "./productsStore";
// import getCoffeeData from "../helpers/GetCoffeeData";

export const CartContext = createContext({
  getCoffeeData: () => {},
  coffee: [],
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneToCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [coffee, setCoffee] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  // ex. cart object
  // [{ id: 1, quantity: 2 }]
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

  function getCoffeeData(id) {
    let coffeeData = coffee.find((coffee) => coffee.id === id);

    if (coffeeData == undefined) {
      return undefined;
    }

    return coffeeData;
  }

  function getProductQuantity(id) {
    // ? runs the method appended after the ? if product is a valid object.
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      //product is not in cart
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      // product is in cart
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => currentProduct.id != id)
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getCoffeeData(cartItem.id);
      totalCost += productData.price * cartItem.quantity;
    });
    return totalCost;
  }
  const contextValue = {
    getCoffeeData: getCoffeeData,
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
