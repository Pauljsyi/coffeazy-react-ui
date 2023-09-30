import React from "react";

import Button from "react-bootstrap/Button";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
// import { getProductData } from "../productsStore";

const CartProduct = (props) => {
  console.log("props in Cartproduct", props);
  const cart = useContext(CartContext);
  const id = props.id;

  console.log("id in Cart product", id);
  const quantity = props.quantity;
  const productData = cart.getCoffeeData(id);
  console.log(productData);

  return (
    <>
      <h3>{productData.title}</h3>
      <p>{quantity} total</p>
      <p>${(quantity * productData.price).toFixed(2)}</p>
      <button
        className="btn btn-danger"
        onClick={() => cart.deleteFromCart(id)}
      >
        Remove
      </button>
      <hr></hr>
    </>
  );
};

export default CartProduct;
