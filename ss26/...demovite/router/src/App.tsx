import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Router from "./Router/Router";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";

const isActive = ({ isActive }: { isActive: boolean }) => {
  return {
    color: isActive ? "orange" : "",
    backgroundColor: isActive ? "red" : "",
  };
  //destructoring
};

function App() {
  return (
    <div>
      {" "}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>  
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
              <NavLink className="nav-link" style={isActive} to={"/home"}>
                Home
              </NavLink>
              <NavLink className="nav-link" style={isActive} to={"/about"}>
                About
              </NavLink>
              <NavLink className="nav-link" style={isActive} to={"/products"}>
                Products
              </NavLink>
              <NavLink className="nav-link" style={isActive} to={"/profile"}>
                Profile
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Router />
    </div>
  );
}

export default App;
