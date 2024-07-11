import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { IStudent } from "../interface/index";

interface AddStudentFormProps {
  show: boolean;
  onHide: () => void;
  onAdd: (student: Omit<IStudent, "id" | "created_at">) => void;
}

const AddStudentForm: React.FC<AddStudentFormProps> = ({
  show,
  onHide,
  onAdd,
}) => {
  const [student_name, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState(true);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!student_name.trim())
      newErrors.student_name = "Tên sinh viên không được để trống";
    if (!email.trim()) newErrors.email = "Email không được để trống";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Email không đúng định dạng";
    if (phone && !/^\d+$/.test(phone))
      newErrors.phone = "Số điện thoại chỉ được phép nhập số";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onAdd({ student_name, email, address, phone, status });
      setStudentName("");
      setEmail("");
      setAddress("");
      setPhone("");
      setStatus(true);
      onHide();
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm mới sinh viên</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Tên sinh viên</Form.Label>
            <Form.Control
              type="text"
              value={student_name}
              onChange={(e) => setStudentName(e.target.value)}
              isInvalid={!!errors.student_name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.student_name}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Địa chỉ</Form.Label>
            <Form.Control
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              isInvalid={!!errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Trạng thái"
              checked={status}
              onChange={(e) => setStatus(e.target.checked)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Thêm mới
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddStudentForm;
