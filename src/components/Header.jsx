import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavigationBar from "./NavigationBar";
import Infopad from "./Infopad";
import logo from "../assets/logo.png";

function Header({ cartItemCount, cart }) {
  return (
    <div className="header">
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="120"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#email">okoprom@gmail.com</Nav.Link>
              <Nav.Link href="#phone">+1 (800) 707-31-01</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#email">Доставка и оплата</Nav.Link>
              <Nav.Link href="#phone">Гарантия</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <NavigationBar cart={cart} cartItemCount={cartItemCount} />
      <Infopad />
    </div>
  );
}

export default Header;
