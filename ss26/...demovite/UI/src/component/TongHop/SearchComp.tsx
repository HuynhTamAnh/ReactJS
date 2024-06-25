import React from "react";
import { Col, Form, Row, InputGroup } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/SearchComp.css"; // Đảm bảo rằng bạn có file CSS này

const SearchComp = () => {
  return (
    <div>
      <Form>
        <Row className="align-items-center me-0">
          <Col md={6}>
            <InputGroup className="mb-2">
              <InputGroup.Text>
                <i className="fas fa-search"></i>
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-4"
              />
            </InputGroup>
          </Col>
          <Col md={3}></Col>
          <Col xs="auto" className="ms-auto">
            <i className="fas fa-bell" style={{ fontSize: "24px" }}></i>
          </Col>
          <Col xs="auto">
            <img
              src="https://i.pinimg.com/736x/80/eb/c6/80ebc6d50db2c2a463cccc1ca7ea13fb.jpg"
              alt="Profile"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchComp;
