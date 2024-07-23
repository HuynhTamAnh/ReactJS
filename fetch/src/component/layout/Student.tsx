import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import {
  getAllStudents,
  createNewStudent,
  updateStudent,
  deleteStudent,
} from "../../store/slice/studentSlice";
import { IStudent } from "../../interface";

const Student: React.FC = () => {
  const students = useSelector((state: RootState) => state.student.students);
  const dispatch = useDispatch<AppDispatch>();

  const [showModal, setShowModal] = useState(false);
  const [editingStudent, setEditingStudent] = useState<IStudent | null>(null);
  const [studentData, setStudentData] = useState<IStudent>({
    id: 0,
    name: "",
    age: "",
    address: "",
    phone: 0,
    gender: true,
    email: "",
  });
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    dispatch(getAllStudents());
  }, []);

  const handleModalClose = () => {
    setShowModal(false);
    setEditingStudent(null);
    setStudentData({
      id: 0,
      name: "",
      age: 0,
      address: "",
      phone: 0,
      gender: true,
      email: "",
    });
  };

  const handleModalShow = (student?: IStudent) => {
    if (student) {
      setEditingStudent(student);
      setStudentData(student);
    }
    setShowModal(true);
  };

  const handleSaveStudent = () => {
    if (editingStudent) {
      dispatch(updateStudent(studentData));
    } else {
      dispatch(createNewStudent(studentData));
    }
    handleModalClose();
  };

  const handleDeleteStudent = (id: number) => {
    dispatch(deleteStudent(id));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setStudentData((prevState) => ({
      ...prevState,
      [name]: name === "gender" ? value === "true" : value,
    }));
  };

  const filteredStudents = students.filter((student: IStudent) => {
    if (filter === "all") return true;
    if (filter === "male") return student.gender;
    if (filter === "female") return !student.gender;
    return true;
  });

  return (
    <Container className="text-center">
      <h1 className="mb-4">Quản lý sinh viên</h1>
      <Button
        variant="primary"
        className="mb-4"
        onClick={() => handleModalShow()}
      >
        Thêm mới sinh viên
      </Button>
      <Form.Select
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
        className="mb-4"
      >
        <option value="all">Tất cả</option>
        <option value="male">Nam</option>
        <option value="female">Nữ</option>
      </Form.Select>
      <Table striped bordered hover className="mx-auto">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Địa chỉ</th>
            <th>Điện thoại</th>
            <th>Giới tính</th>
            <th>Email</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student: any, index: any) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.address}</td>
              <td>{student.phone}</td>
              <td>{student.gender ? "Nam" : "Nữ"}</td>
              <td>{student.email}</td>
              <td>
                <Button
                  variant="danger"
                  className="me-2"
                  onClick={() => handleDeleteStudent(student.id)}
                >
                  Xóa
                </Button>
                <Button
                  variant="warning"
                  onClick={() => handleModalShow(student)}
                >
                  Sửa
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editingStudent ? "Chỉnh sửa sinh viên" : "Thêm mới sinh viên"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Tên</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên sinh viên"
                name="name"
                value={studentData.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tuổi</Form.Label>
              <Form.Control
                type="number"
                placeholder="Nhập tuổi"
                name="age"
                value={studentData.age}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Địa chỉ</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập địa chỉ"
                name="address"
                value={studentData.address}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Điện thoại</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập số điện thoại"
                name="phone"
                value={studentData.phone}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Giới tính</Form.Label>
              <Form.Select
                name="gender"
                value={studentData.gender ? "true" : "false"}
                onChange={handleInputChange}
              >
                <option value="true">Nam</option>
                <option value="false">Nữ</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Nhập email"
                name="email"
                value={studentData.email}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleSaveStudent}>
            {editingStudent ? "Cập nhật sinh viên" : "Thêm mới sinh viên"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Student;
