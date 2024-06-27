import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

type Bill = {
  invoiceId: string;
  date: string;
  customer: string;
  payable: string;
  paid: string;
  due: string;
};

type ListProps = {
  data: Bill[];
  setData: (data: Bill[]) => void;
  searchQuery: string;
};

const List: React.FC<ListProps> = ({ data, setData, searchQuery }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingBill, setEditingBill] = useState<Bill | null>(null);

  const handleDelete = (invoiceId: string) => {
    const isConfirmed = window.confirm(
      "Bạn có chắc chắn muốn xóa hàng này không?"
    );
    if (isConfirmed) {
      const newData = data.filter((bill) => bill.invoiceId !== invoiceId);
      setData(newData);
    }
  };

  const handleEdit = (bill: Bill) => {
    setEditingBill(bill);
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    if (editingBill) {
      const newData = data.map((bill) =>
        bill.invoiceId === editingBill.invoiceId ? editingBill : bill
      );
      setData(newData);
      setShowEditModal(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editingBill) {
      setEditingBill({
        ...editingBill,
        [e.target.name]: e.target.value,
      });
    }
  };

  const tableStyle = {
    borderCollapse: "separate" as const,
    borderSpacing: "0 8px",
    background: "#f8f9fa",
  };

  const cellStyle = {
    padding: "12px 16px",
    border: "none",
    backgroundColor: "white",
  };

  const headerStyle = {
    ...cellStyle,
    backgroundColor: "#f8f9fa",
    fontWeight: "normal" as const,
    color: "#6c757d",
  };

  return (
    <div style={{ padding: "20px" }}>
      <Table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>
              <input type="checkbox" />
            </th>
            <th style={headerStyle}>Invoice ID</th>
            <th style={headerStyle}>Date</th>
            <th style={headerStyle}>Customer</th>
            <th style={headerStyle}>Payable Amount</th>
            <th style={headerStyle}>Paid Amount</th>
            <th style={headerStyle}>Due</th>
            <th style={headerStyle}></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row: Bill, index: number) => (
            <tr key={index}>
              <td style={cellStyle}>
                <input type="checkbox" />
              </td>
              <td style={{ ...cellStyle, color: "#007bff" }}>
                {row.invoiceId}
              </td>
              <td style={cellStyle}>{row.date}</td>
              <td style={cellStyle}>{row.customer}</td>
              <td style={cellStyle}>{row.payable}</td>
              <td style={cellStyle}>{row.paid}</td>
              <td style={cellStyle}>{row.due}</td>
              <td style={cellStyle}>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => handleEdit(row)}
                  className="me-2"
                >
                  Sửa
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => handleDelete(row.invoiceId)}
                >
                  Xoá
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sửa thông tin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingBill && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Invoice ID</Form.Label>
                <Form.Control
                  type="text"
                  name="invoiceId"
                  value={editingBill.invoiceId}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="text"
                  name="date"
                  value={editingBill.date}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Customer</Form.Label>
                <Form.Control
                  type="text"
                  name="customer"
                  value={editingBill.customer}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Payable Amount</Form.Label>
                <Form.Control
                  type="text"
                  name="payable"
                  value={editingBill.payable}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Paid Amount</Form.Label>
                <Form.Control
                  type="text"
                  name="paid"
                  value={editingBill.paid}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Due</Form.Label>
                <Form.Control
                  type="text"
                  name="due"
                  value={editingBill.due}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Lưu thay đổi
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default List;
