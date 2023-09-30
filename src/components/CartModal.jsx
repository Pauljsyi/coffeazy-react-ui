import React from "react";
import ReactDom from "react-dom";
import { Modal, Button } from "react-bootstrap";
import CartProduct from "./CartProduct";

const CartModal = (props) => {
  const { showCart, handleOpen, handleClose, coffeeCount, cart } = props;

  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };

  if (!open) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <div
        id="overlay"
        onClick={() => {
          handleClose();
          document.body.style.overflow = "unset";
        }}
      />
      <div className="modal-container">
        <div>
          <div className="modal-head">
            <h1>Shopping Cart</h1>
          </div>
          <div className="modal-body">
            {coffeeCount > 0 ? (
              <>
                <p>Items in your cart:</p>
                {cart.items.map((currItem, idx) => (
                  <CartProduct
                    key={idx}
                    id={currItem.id}
                    quantity={currItem.quantity}
                  ></CartProduct>
                ))}
                <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>
                <button className="btn btn-primary" onClick={checkout}>
                  Purchase Items!
                </button>
              </>
            ) : (
              <h1>There are no items in your cart!</h1>
            )}
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default CartModal;
