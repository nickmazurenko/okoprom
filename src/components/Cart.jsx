import { Form, Button, Col, Row, Container, Modal } from "react-bootstrap";
import { useState } from "react";

import CartBody from "./CartItem";

function Cart({ show, handleClose, cartItemCount, cart }) {
  return (
    <div className="cart">
      <Container>
        {cartItemCount ? (
          <Modal size="lg" show={show} onHide={handleClose}>
            <CartBody cart={cart} handleClose={handleClose} />
          </Modal>
        ) : (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Пусто</Modal.Title>
            </Modal.Header>
            <Modal.Body>Похоже вы ничего не добавили в вашу корзину</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Закрыть
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    </div>
  );
}

export default Cart;
