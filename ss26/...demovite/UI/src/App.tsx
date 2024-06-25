import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./component/TongHop/Side3";
import Search from "./component/TongHop/SearchComp";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Content1 from "./component/TongHop/Content1";
import List from "./component/TongHop/List";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={2} id="sidebar-wrapper">
          <Sidebar />
        </Col>
        <Col xs={10} id="page-content-wrapper">
          <Search />
          <br />
          <Content1 />
          <br />
          <br />
          <List />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
