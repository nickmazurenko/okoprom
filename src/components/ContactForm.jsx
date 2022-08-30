import { useState } from "react";
import { Form, Button, Col, Row, Container, Modal } from "react-bootstrap";
import "../styles/contactForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ContactForm() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const isCorrectPhone = RegExp(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    ).test(form.phone.value);
    if (form.checkValidity() === false || !isCorrectPhone) {
      if (!isCorrectPhone) {
        toast.error("Номер указан неправильно");
      }
      event.stopPropagation();
    }
    setName(form.name.value)
    event.preventDefault();
    setValidated(true);
    handleShow();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Успех</Modal.Title>
        </Modal.Header>
        <Modal.Body>{name}, Вы успешно отпраивли запрос</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="contactForm m-5 p-5 bg-dark">
        <Container>
          <Row>
            <Col>
              <h1 className="text-light m-5">
                Будем рады ответить на все интересующие вопросы
              </h1>
              <p className="text-secondary m-5">
                Оставьте заявку и мы вам вскоре позвоним и проконнсультируем по
                всем интиресующщим вопросам
              </p>
            </Col>
            <Col>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 mb-5 mt-5">
                  <Form.Control
                    required
                    type="text"
                    id="name"
                    className="text-light form-input mb-5 mt-5"
                    placeholder="Ваше имя"
                  ></Form.Control>
                  <Form.Control
                    required
                    type="text"
                    className="text-light form-input mb-5 mt-5"
                    id="phone"
                    placeholder="+1 ___ __ __"
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                  <Form.Control
                    type="email"
                    className="text-light form-input mb-5 mt-5"
                    placeholder="E-mail(необязательно)"
                  ></Form.Control>

                  <Button type="submit" variant="light">
                    <ToastContainer />
                    Отправить
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ContactForm;
