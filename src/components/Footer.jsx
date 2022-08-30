import { Container, NavLink } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Col, Row, ListGroup, ListGroupItem } from "react-bootstrap";
import ContactForm from "./ContactForm";

import logo from "../assets/logo.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <ContactForm/>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <img className="mt-4" src={logo} height="30" alt="Logo" />
        </Container>
      </Navbar>
      <hr style={{ width: "90%", margin: "auto" }} />
      <Navbar bg="light" variant="light" expand="lg">
        <Container className="mt-5">
          <Col>
            <h4>
              +7 (800) 707-31-01
              <br />
              okoprom@gmail.com
            </h4>
            <Row>
              <Col>
                <Button size="lg" className="mt-3 me-3" variant="dark">
                  WhatsUp
                </Button>
                <Button size="lg" className="mt-3 me-3" variant="dark">
                  Telegram
                </Button>
              </Col>
            </Row>
            <Row style={{ marginTop: "200px" }}>
              <Col>
                <Button variant="light" href="/" size="lg">
                  <img
                    src={instagram}
                    width="20"
                    height="20"
                    className="d-inline-block"
                    alt="instagram"
                  />
                </Button>
                <Button variant="light" href="/" size="lg">
                  <img
                    src={youtube}
                    width="20"
                    height="20"
                    className="d-inline-block"
                    alt="youtube"
                  />
                </Button>
              </Col>
              <Col>Подписывайтесь на наc в социальных сетях.</Col>
            </Row>
          </Col>
          <Col></Col>
          <Col>
            <Row>
              <h4>Наша продукция</h4>
            </Row>
            <ListGroup>
              <ListGroupItem className="list-item">
                <NavLink to="/">Станки для разделки кабеля</NavLink>
              </ListGroupItem>
              <ListGroupItem className="list-item">
                <NavLink to="/">Сепараторы</NavLink>
              </ListGroupItem>
              <ListGroupItem className="list-item">
                <NavLink to="/">Станок для разделки теплообменников</NavLink>
              </ListGroupItem>
              <ListGroupItem className="list-item">
                <NavLink to="/">Разделка радиаторов</NavLink>
              </ListGroupItem>
              <ListGroupItem className="list-item">
                <NavLink to="/">Запасные части</NavLink>
              </ListGroupItem>
              <ListGroupItem className="list-item">
                <NavLink to="/">Другое</NavLink>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col>
            <Row>
              <h4>Информация</h4>
            </Row>
            <ListGroup>
              <ListGroupItem className="list-item">
                <NavLink to="/">Доставка и оплата</NavLink>
              </ListGroupItem>
              <ListGroupItem className="list-item">
                <NavLink to="/">Гарантия</NavLink>
              </ListGroupItem>
              <ListGroupItem className="list-item">
                <NavLink to="/">Служба контроля качества</NavLink>
              </ListGroupItem>
              <ListGroupItem className="list-item">
                <NavLink to="/">Наше производство</NavLink>
              </ListGroupItem>
              <ListGroupItem className="list-item">
                <NavLink to="/">О компании</NavLink>
              </ListGroupItem>
              <ListGroupItem className="list-item">
                <NavLink to="/">Конакты</NavLink>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Container>
      </Navbar>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav>
            <Nav.Link href="/">
              Интернет магазин "Окопром" © 2021 Все права защищены
            </Nav.Link>
          </Nav>
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#confid">Политика конфиденциальности</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
