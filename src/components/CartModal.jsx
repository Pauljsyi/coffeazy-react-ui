import React from "react";
import ReactDom from "react-dom";
import { Modal, Button } from "react-bootstrap";
import CartProduct from "./CartProduct";

// const CartModal = (props) => {
//   const { showCart, handleClose, coffeeCount, cart } = props;
//   console.log(cart.getCoffeeData);
//   return (
//     <div>
//       <div closeButton>
//         <Modal.Title>Shopping Cart</Modal.Title>
//       </div>
//       <Modal.Body>
//         {coffeeCount > 0 ? (
//           <>
//             <p>Items in your cart:</p>
//             {cart.items.map((currItem, idx) => (
//               <CartProduct
//                 key={idx}
//                 id={currItem.id}
//                 quantity={currItem.quantity}
//               ></CartProduct>
//             ))}
//             <h1>Total: {cart.getTotalCost()}</h1>
//             <Button>Purchase Items!</Button>
//           </>
//         ) : (
//           <h1>There are no items in your cart!</h1>
//         )}
//       </Modal.Body>
//     </div>
//   );
// };

const CartModal = (props) => {
  const { showCart, handleOpen, handleClose, coffeeCount, cart } = props;
  if (!open) {
    return null;
  }

  console.log("cart in MODALLLL", cart.getTotalCost());

  return ReactDom.createPortal(
    <>
      <div
        id="overlay"
        onClick={() => {
          handleClose();
          console.log("you clicked me");
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
                <button className="btn btn-primary">Purchase Items!</button>
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
