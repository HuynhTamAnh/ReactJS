import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

type PropsType = {
  addBill: (newBill: Bill) => void;
};

type Bill = {
  invoiceId: string;
  date: string;
  customer: string;
  payable: string;
  paid: string;
  due: string;
};

const Content1: React.FC<PropsType> = ({ addBill }) => {
  const [newBill, setNewBill] = useState<Bill>({
    invoiceId: "",
    date: "",
    customer: "",
    payable: "",
    paid: "",
    due: "",
  });

  const handleAdd = () => {
    if (
      newBill.invoiceId &&
      newBill.date &&
      newBill.customer &&
      newBill.payable &&
      newBill.paid &&
      newBill.due
    ) {
      addBill(newBill);
      setNewBill({
        invoiceId: "",
        date: "",
        customer: "",
        payable: "",
        paid: "",
        due: "",
      });
    } else {
      alert("Vui lòng nhập đầy đủ thông tin!");
    }
  };

  return (
    <div>
      <h4>Sales Information</h4>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Customer</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Customer Name"
              value={newBill.customer}
              onChange={(e) =>
                setNewBill({ ...newBill, customer: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Invoice ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Invoice ID"
              value={newBill.invoiceId}
              onChange={(e) =>
                setNewBill({ ...newBill, invoiceId: e.target.value })
              }
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              value={newBill.date}
              onChange={(e) => setNewBill({ ...newBill, date: e.target.value })}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              value={newBill.date}
              onChange={(e) => setNewBill({ ...newBill, date: e.target.value })}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Payable Amount</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Payable Amount"
              value={newBill.payable}
              onChange={(e) =>
                setNewBill({ ...newBill, payable: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Paid Amount</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Paid Amount"
              value={newBill.paid}
              onChange={(e) => setNewBill({ ...newBill, paid: e.target.value })}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Due Amount</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Due Amount"
              value={newBill.due}
              onChange={(e) => setNewBill({ ...newBill, due: e.target.value })}
            />
          </Form.Group>
        </Row>

        <div className="d-flex justify-content-end">
          <Button variant="outline-success" onClick={handleAdd}>
            Add
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Content1;
