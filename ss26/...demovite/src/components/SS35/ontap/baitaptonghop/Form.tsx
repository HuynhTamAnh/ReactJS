import React from "react";
import { Button, InputGroup, Form as BootstrapForm } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
  return (
    <InputGroup className="mb-3">
      <BootstrapForm.Control
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <Button variant="outline-secondary" id="button-addon2">
        Button
      </Button>
    </InputGroup>
  );
};

export default Form;
