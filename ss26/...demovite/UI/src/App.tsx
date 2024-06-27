import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./component/TongHop/Side3";
import SearchComp from "./component/TongHop/SearchComp";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Content1 from "./component/TongHop/Content1";
import List from "./component/TongHop/List";
import { data as initData } from "./component/TongHop/data";

type Bill = {
  invoiceId: string;
  date: string;
  customer: string;
  payable: string;
  paid: string;
  due: string;
};

function App() {
  const [data, setData] = useState(initData);
  const [searchQuery, setSearchQuery] = useState("");

  const addBill = (newBill: Bill) => {
    setData([...data, newBill]);
  };

  const updateBill = (updatedBill: Bill) => {
    setData(
      data.map((bill) =>
        bill.invoiceId === updatedBill.invoiceId ? updatedBill : bill
      )
    );
  };

  const deleteBill = (invoiceId: string) => {
    setData(data.filter((bill) => bill.invoiceId !== invoiceId));
  };

  const filteredData = data.filter((bill) =>
    Object.values(bill).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <Container fluid>
      <Row>
        <Col xs={2} id="sidebar-wrapper">
          <Sidebar />
        </Col>
        <Col xs={10} id="page-content-wrapper">
          <SearchComp
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <br />
          <Content1 addBill={addBill} />
          <br />
          <br />
          <List
            data={filteredData}
            setData={setData}
            searchQuery={searchQuery}
            updateBill={updateBill}
            deleteBill={deleteBill}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
