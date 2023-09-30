import React, { useState, useContext } from "react";
import cn from "classnames";
import { Button, Card, Col, Collapse, Row, Form } from "react-bootstrap";
import product1 from "../assets/img/products/Shutterstock_503987836.jpg";
import product2 from "../assets/img/products/Shutterstock_499650232.jpg";
import { CartContext } from "../context/CartContext";

const ProductCard = (props) => {
  const cart = useContext(CartContext);
  const { coffee, idx } = props;
  const [open, setOpen] = useState(false);

  // console.log(cart.items);

  const productQuantity = cart.getProductQuantity(coffee.id);
  // console.log("cart items", cart.items);

  return (
    <>
      <Col key={idx} align="center">
        <Card
          key={idx}
          className="m-2"
          style={{ width: "18rem" }}

          // aria-controls="collapse-body"
          // aria-expanded={open}
        >
          <Card.Img
            className="card-img"
            variant="top"
            src={coffee.image}
            width={250}
            height={250}
            onClick={() => {
              setOpen(!open);
              // console.log("you didnt click the actual button");
            }}
          />

          <Card.Body>
            <Card.Title>{coffee.title}</Card.Title>

            <Collapse in={open} mountOnEnter={open}>
              <div className="collapse" id="collapse-body">
                <p>{coffee.description}</p>
                <span>
                  <p>${coffee.price}</p>
                </span>
                {productQuantity > 0 ? (
                  <>
                    <Form as={Row}>
                      <Form.Label column="true" sm="6">
                        {productQuantity}
                      </Form.Label>
                      <Col sm="6">
                        <Button
                          sm="6"
                          className="mx-2"
                          onClick={() => cart.addOneToCart(coffee.id)}
                        >
                          +
                        </Button>
                        <Button
                          sm="6"
                          className="mx-2"
                          onClick={() => cart.removeOneFromCart(coffee.id)}
                        >
                          -
                        </Button>
                      </Col>
                    </Form>
                    <Button
                      variant="danger"
                      className="my-2"
                      onClick={() => cart.deleteFromCart(coffee.id)}
                    >
                      Remove from cart
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="primary"
                    onClick={() => {
                      cart.addOneToCart(coffee.id);
                      // console.log("coffee id", coffee.id);
                    }}
                  >
                    Add to Cart
                  </Button>
                )}
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* CARD FLIP  */}
      {/* <div className="flip-card-outer">
        <div className="flip-card-inner hover-trigger">
          <div className="card front border-0">
            <h3 className="pt-3">{coffee.title}</h3>
            <div className="card-body d-flex justify-content-center align-items-center">
              <img
                className="coffee-img img-fluid w-100 h-100"
                src={coffee.image}
                alt=""
              />
            </div>
          </div>
          <div className="card back">
            <div className="card-body d-flex justify-content-center align-items-center">
              <div>
                <p className="card-text fs-10">{coffee.description}</p>
                <p>
                  <strong>Ingredients:</strong> {coffee.ingredients.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ProductCard;
