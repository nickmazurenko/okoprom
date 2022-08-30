import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import "../styles/infopad.css";
import connectImg from "../assets/connect.png";
import garantImg from "../assets/garant.png";
import deliveryImg from "../assets/delivery.png";

function Infopad() {
  return (
    <div className="infopad">
      <hr style={{ width: "90%", margin: "auto" }} />
      <CardGroup>
        <Card border="light" className="infopad-card">
          <Card.Img src={connectImg} />
          <Card.Body>
            <Card.Title>Всегда на связи</Card.Title>
            <Card.Text>
              Консультируем при покупке и в дальнейшем при эксплуатации нашего
              оборудования
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="light" className="infopad-card">
          <Card.Img src={deliveryImg} />
          <Card.Body>
            <Card.Title>Доставка</Card.Title>
            <Card.Text>
              Отправим товар транспортной компанией или почтовым отправлением
              (оплата при получении)
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="light" className="infopad-card">
          <Card.Img src={garantImg} />
          <Card.Body>
            <Card.Title>Гарантия на всё</Card.Title>
            <Card.Text>
              Предоставляется гарантия сроком до 1 года со дня приобретения
              товара
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Infopad;
