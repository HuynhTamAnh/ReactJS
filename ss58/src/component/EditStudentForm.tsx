import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { IStudent } from "../interface";

interface EditStudentFormProps {
  show: boolean;
  onHide: () => void;
  onEdit: (student: IStudent) => void;
  student: IStudent | null;
}

const EditStudentForm: React.FC<EditStudentFormProps> = ({
  show,
  onHide,
  onEdit,
  student,
}) => {
  const [formData, setFormData] = useState<IStudent | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (student) {
      setFormData({ ...student });
    }
  }, [student]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData?.student_name.trim())
      newErrors.student_name = "Tên sinh viên không được để trống";
    if (!formData?.email.trim()) newErrors.email = "Email không được để trống";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email không đúng định dạng";
    if (formData?.phone && !/^\d+$/.test(formData.phone))
      newErrors.phone = "Số điện thoại chỉ được phép nhập số";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm() && formData) {
      onEdit(formData);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  if (!formData) return null;

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Sửa thông tin sinh viên</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Tên sinh viên</Form.Label>
            <Form.Control
              type="text"
              name="student_name"
              value={formData.student_name}
              onChange={handleInputChange}
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
              name="email"
              value={formData.email}
              onChange={handleInputChange}
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
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
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
              name="status"
              checked={formData.status}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Lưu
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditStudentForm;
