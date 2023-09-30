import React from "react";
import { PaymentElement } from "@stripe/react-stripe-js";

const Cart = () => {
  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

export default Cart;
