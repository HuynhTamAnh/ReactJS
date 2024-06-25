import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Side3 = () => {
  return (
    <div>
      <Navbar
        bg="light"
        variant="light"
        expand="lg"
        className="flex-column vh-100"
      >
        <Navbar.Brand href="#home" className="text-primary mb-4">
          Sales.
        </Navbar.Brand>
        <div className="d-flex flex-column justify-content-between h-100">
          <Nav className="flex-column">
            <Nav.Link className="mb-2">Dashboard</Nav.Link>
            <Nav.Link className="mb-2">Lab Test</Nav.Link>
            <Nav.Link className="mb-2">Appointment</Nav.Link>
            <Nav.Link className="mb-2">Message</Nav.Link>
            <Nav.Link className="mb-2">Payment</Nav.Link>
            <Nav.Link className="mb-2">Setting</Nav.Link>
          </Nav>
          <Nav className="flex-column mt-auto">
            <Nav.Link>Help</Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default Side3;
