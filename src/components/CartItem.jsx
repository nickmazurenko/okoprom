import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";

import { useState, useEffect } from "react";
import { chooseImg } from "../utils/chooseImg";

const countTotal = (cart) => {
  let total = cart.reduce((total, item) => {
    return (total += Number(
      item.price.slice(0, item.price.length - 1).replace(/ /g, "")
    ));
  }, 0);

  return total;
};

const countItems = (cart) => {
  const newCart = [...new Map(cart.map((item) => [item["id"], item])).values()];
  newCart.forEach((item) => {
    item.count = cart.filter((value) => item.id === value.id).length;
  });
  return newCart;
};

function CartItem({ item }) {
  const [image, setImage] = useState();
  useEffect(() => {
    chooseImg(item.id, setImage);
  }, [item]);
  return (
    <>
      <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
        <MDBCol md="2" lg="2" xl="2">
          <MDBCardImage src={image} fluid className="rounded-3" />
        </MDBCol>
        <MDBCol md="3" lg="3" xl="3">
          <MDBTypography tag="h6" className="text-muted">
            Товар
          </MDBTypography>
          <MDBTypography tag="h6" className="text-black mb-0">
            {item.name}
          </MDBTypography>
        </MDBCol>
        <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
          <MDBBtn color="link" className="px-2">
            <MDBIcon fas icon="minus" />
          </MDBBtn>

          <MDBInput type="number" min="0" defaultValue={item.count} size="sm" />

          <MDBBtn color="link" className="px-2">
            <MDBIcon fas icon="plus" />
          </MDBBtn>
        </MDBCol>
        <MDBCol md="2" lg="3" xl="3" className="text-end">
          <MDBTypography tag="h6" className="mb-0">
            {item.price}
          </MDBTypography>
        </MDBCol>
        <MDBCol md="1" lg="1" xl="1" className="text-end">
          <a href="#!" className="text-muted">
            <MDBIcon fas icon="times" />
          </a>
        </MDBCol>
      </MDBRow>

      <hr className="my-4" />
    </>
  );
}

export default function CartBody({ cart, handleClose }) {
  countItems(cart);
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard
              className="card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="7">
                    <div className="pl-5 pt-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography
                          tag="h1"
                          className="fw-bold mb-0 text-black"
                        >
                          Корзина
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          {cart.length} items
                        </MDBTypography>
                      </div>
                      <hr className="my-4" />

                      {countItems(cart).map((item, idx) => (
                        <CartItem key={idx} item={item} />
                      ))}

                      <div className="pt-5">
                        <MDBBtn onClick={() => handleClose()} color="dark">
                          Закрыть
                        </MDBBtn>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="5" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography
                        tag="h3"
                        className="fw-bold mb-5 mt-2 pt-1"
                      >
                        Итого
                      </MDBTypography>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Предмета {cart.length}
                        </MDBTypography>
                      </div>

                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Доставка
                      </MDBTypography>

                      <div className="mb-4 pb-2">
                        <select
                          className="select p-2 rounded bg-grey"
                          style={{ width: "100%" }}
                        >
                          <option value="1">Новая почта- $5.00</option>
                          <option value="2">Почта</option>
                          <option value="3">Почта</option>
                          <option value="4">Почта</option>
                        </select>
                      </div>

                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Промокод
                      </MDBTypography>

                      <div className="mb-5">
                        <MDBInput size="lg" label="введите промокод" />
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Всего
                        </MDBTypography>
                        <MDBTypography tag="h5">
                          $ {countTotal(cart)}
                        </MDBTypography>
                      </div>

                      <MDBBtn
                        onClick={() => handleClose()}
                        color="dark"
                        block
                        size="lg"
                      >
                        Купить
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
