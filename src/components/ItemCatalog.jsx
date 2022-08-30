import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Items } from "../catalog/shopItems";
import { ItemCard } from "./ItemCard";
import itemsImg from "../assets/items.png";
import discountImg from "../assets/discount.png";

function ItemCatalog({ cart, setCart }) {
  const catalog = new Items();
  return (
    <div className="itemCatalog m-5">
      <Container>
        <h1>
          Вся продукция
          <span style={{ fontSize: "20px" }} className="text-secondary m-5">
            {catalog.count}
          </span>
        </h1>
        <Row className="mt-3">
          <Col xs={3}>
            <ListGroup>
              <ListGroup.Item variant="dark">
                <Row>
                  <Col xs={6}>Вся продукция</Col>
                  <Col></Col>
                  <Col></Col>
                  <Col>
                    <img src={itemsImg}></img>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col xs={6}>Скидки</Col>
                  <Col></Col>
                  <Col></Col>
                  <Col>
                    <img src={discountImg}></img>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>Станки для разделки кабеля</ListGroup.Item>
              <ListGroup.Item>Сепараторы / Дробилки для кабеля</ListGroup.Item>
              <ListGroup.Item>Запасные части</ListGroup.Item>
              <ListGroup.Item>
                Станки для разделки теплообменников
              </ListGroup.Item>
              <ListGroup.Item>Разделка радиаторов</ListGroup.Item>
              <ListGroup.Item>Другое</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={9} className="d-flex flex-wrap justify-content-around">
            {catalog.items.map((item, index) => {
              return (
                <ItemCard
                  cart={cart}
                  setCart={setCart}
                  key={index}
                  item={item}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ItemCatalog;
