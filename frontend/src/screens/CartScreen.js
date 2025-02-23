import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import {   removeFromCart } from "../redux/slices/cartSlice";

function CartScreen({   history }) {
 

  const dispatch = useDispatch();

   

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems)
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Carrinho de compras</h1>
        {cartItems.length === 0 ? (
          <Message variant="info">
            Seu carrinho está vazio. <Link to="/">Voltar</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col m={3}>
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </Col>
                  <Col>{item.qty}</Col>
                  <Col>R${item.price}</Col>
                  <Col md={1}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>

      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              R$
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item>
            <Button
              type="button"
              className="w-100"
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}
            >
              Fazer o check-out
            </Button>
          </ListGroup.Item>
        </Card>
      </Col>
    </Row>
  );
}

export default CartScreen;