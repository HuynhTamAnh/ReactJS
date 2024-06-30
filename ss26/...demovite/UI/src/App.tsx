import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./component/TongHop/Side3";
import SearchComp from "./component/TongHop/SearchComp";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Content1 from "./component/TongHop/Content1";
import List from "./component/TongHop/List";
import { data as initData } from "./component/TongHop/data";

// Import components for other pages
import LabTest from "./component/pages/LabTest";
import Appointment from "./component/pages/Appointment";
import MedicineOrder from "./component/pages/MedicineOrder";
import Message from "./component/pages/Message";
import Payment from "./component/pages/Payment";
import Settings from "./component/pages/Settings";
import Help from "./component/pages/Help";

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

  const Dashboard = () => (
    <>
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
    </>
  );

  return (
    <Router>
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
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/lab-test" element={<LabTest />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/medicine-order" element={<MedicineOrder />} />
              <Route path="/message" element={<Message />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
