import React, { useEffect, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { chooseImg } from "../utils/chooseImg";

export const ItemCard = ({ item, cart, setCart }) => {
  const [cardImg, setCardImg] = useState();
  const addItemToCart = (item) => {
    setCart([...cart, item]);
    localStorage.setItem("cart", JSON.stringify([...cart, item]));
  } 
  useEffect(() => {
    chooseImg(item.id, setCardImg);
  }, [item.id]);

  return (
    <Card className="m-2 bg-light d-flex flex-column justify-content-center itemCard">
      <Card.Img variant="top" src={cardImg} />
      <Card.Body>
        <Card.Title className="itemLink">{item.name}</Card.Title>
        <Table striped>
          <tbody>
            <tr>
              <td>Вес</td>
              <td>{item.info.weight + " кг"}</td>
            </tr>
            <tr>
              <td>Двигатель</td>
              <td>{item.info.engine + " Вт"}</td>
            </tr>
            <tr>
              <td>Диам. обраб.</td>
              <td>
                {"от " +
                  item.info.diameter.from +
                  " до " +
                  item.info.diameter.to +
                  "мм"}
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="d-grid gap-2">
          <Card.Title className="mt-5">{item.price}</Card.Title>
          <Button onClick={() => addItemToCart(item)} size="lg" className="" variant={"dark"}>
            Купить
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
