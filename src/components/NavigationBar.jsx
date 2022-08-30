import { Navbar, Button, Nav, Container, Badge } from "react-bootstrap";
import { useState, useEffect } from "react";
import searchImg from "../assets/search.png";
import cartImg from "../assets/cart.png";

import Cart from "./Cart";

function NavigationBar({ cartItemCount, cart}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Cart
        cartItemCount={cartItemCount}
        cart={cart}
        show={show}
        handleClose={handleClose}
      />

      <Navbar className="mt-4 mb-4" variant="light">
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Button className="me-4" active="1" variant="outline-light">
                Каталог
              </Button>
              <Button className="me-4" active="1" variant="outline-light">
                Наше производство
              </Button>
              <Button className="me-4" active="1" variant="outline-light">
                О компании
              </Button>
              <Button className="me-4" active="1" variant="outline-light">
                Контакты
              </Button>
            </Nav>
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav className="me-auto"></Nav>
              <Button className="me-1" variant="light">
                <img
                  src={searchImg}
                  width="20"
                  height="20"
                  className="d-inline-block"
                  alt="search"
                />
              </Button>
              <Button
                onClick={() => handleShow()}
                className="me-3"
                variant="light"
              >
                <img
                  src={cartImg}
                  width="20"
                  height="20"
                  className="d-inline-block"
                  alt="search"
                />
                <Badge className="m-1" bg="success">
                  {cartItemCount}
                </Badge>
              </Button>
              <Button className="me-3" variant="dark">
                Запросить консультацию
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
