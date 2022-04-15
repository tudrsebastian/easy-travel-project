import React, { useState } from "react";
import { Button, CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import SelectDate from "./DateSelect";
const Tour = ({ id, image, info, name, price }) => {
  const [readMore, setReadMore] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const ModalWindow = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Select Date and Book your tour !
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAge">
              <Form.Label>Age</Form.Label>
              <Form.Control type="text" placeholder="Enter Age" />
            </Form.Group>
            <SelectDate />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="success">Book and Pay</Button>
        </Modal.Footer>
      </Modal>
    );
  };
  return (
    <>
      <div>
        <CardGroup style={{ padding: "0 500px 0 500px" }}>
          <Card style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Img variant="top" src={image} />
              <Card.Title>{name}</Card.Title>
              <Card.Text>Price: ${price}</Card.Text>

              {readMore ? (
                <Card.Text> {info}</Card.Text>
              ) : (
                `${info.substring(0, 200)}...`
              )}

              <Button variant="info" onClick={() => setReadMore(!readMore)}>
                {readMore ? "show less" : " read more"}
              </Button>

              <Button variant="primary" onClick={() => setShowModal(true)}>
                Book Now!
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
        <ModalWindow show={showModal} onHide={() => setShowModal(false)} />
      </div>
    </>
  );
};

export default Tour;
