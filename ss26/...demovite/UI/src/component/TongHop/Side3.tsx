import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaThLarge,
  FaFlask,
  FaCalendarAlt,
  FaPrescriptionBottleAlt,
  FaEnvelope,
  FaCreditCard,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div>
      <Navbar
        bg="white"
        variant="light"
        expand="lg"
        className="flex-column vh-100 border-end"
      >
        <Navbar.Brand href="#home" className="text-primary fw-bold mb-4 fs-4">
          Sales.
        </Navbar.Brand>
        <div className="d-flex flex-column justify-content-between h-100 w-100">
          <Nav className="flex-column w-100">
            <Nav.Link className="mb-3 d-flex align-items-center">
              <FaThLarge className="me-3 text-primary" /> Dashboard
            </Nav.Link>
            <Nav.Link className="mb-3 d-flex align-items-center">
              <FaFlask className="me-3" /> Lab Test
            </Nav.Link>
            <Nav.Link className="mb-3 d-flex align-items-center">
              <FaCalendarAlt className="me-3" /> Appointment
            </Nav.Link>
            <Nav.Link className="mb-3 d-flex align-items-center">
              <FaPrescriptionBottleAlt className="me-3" /> Medicine Order
            </Nav.Link>
            <Nav.Link className="mb-3 d-flex align-items-center">
              <FaEnvelope className="me-3" /> Message
            </Nav.Link>
            <Nav.Link className="mb-3 d-flex align-items-center">
              <FaCreditCard className="me-3" /> Payment
            </Nav.Link>
            <Nav.Link className="mb-3 d-flex align-items-center">
              <FaCog className="me-3" /> Settings
            </Nav.Link>
          </Nav>
          <Nav className="flex-column mt-auto w-100">
            <Nav.Link className="d-flex align-items-center">
              <FaQuestionCircle className="me-3" /> Help
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default Sidebar;
