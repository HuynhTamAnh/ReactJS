import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Pagination, Table } from "react-bootstrap";
import StudentRow from "./component/StudentRow";
import AddStudentForm from "./component/AddStudentForm";
import EditStudentForm from "./component/EditStudentForm";
import { IStudent } from "./interface/index";
import {
  getStudentsWithPaginate,
  deleteStudent,
  addStudent,
  updateStudent,
} from "./service/students";

function App() {
  const [students, setStudents] = useState<IStudent[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(5);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState<number | null>(
    null
  );
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<IStudent | null>(null);

  const totalPages = Math.ceil(100 / studentsPerPage);

  useEffect(() => {
    getStudentsWithPaginate(currentPage, studentsPerPage).then((data) =>
      setStudents(data)
    );
  }, [currentPage, studentsPerPage]);

  const handleDelete = (id: number) => {
    setSelectedStudentId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (selectedStudentId !== null) {
      await deleteStudent(selectedStudentId);
      setStudents(
        students.filter((student) => student.id !== selectedStudentId)
      );
      setShowDeleteModal(false);
      setSelectedStudentId(null);
    }
  };

  const handleAddStudent = async (
    newStudent: Omit<IStudent, "id" | "created_at">
  ) => {
    try {
      const addedStudent = await addStudent(newStudent);
      setStudents([...students, addedStudent]);
      setShowAddModal(false);
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const handleEdit = (student: IStudent) => {
    setSelectedStudent(student);
    setShowEditModal(true);
  };

  const handleUpdateStudent = async (updatedStudent: IStudent) => {
    try {
      await updateStudent(updatedStudent);
      setStudents(
        students.map((student) =>
          student.id === updatedStudent.id ? updatedStudent : student
        )
      );
      setShowEditModal(false);
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return (
    <div className="container">
      {/* ... (existing code) */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Tên sinh viên</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Trạng thái</th>
            <th>Lựa chọn</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRow
              key={student.id}
              data={student}
              onDelete={handleDelete}
              onEdit={() => handleEdit(student)}
            />
          ))}
        </tbody>
      </Table>
      {/* ... (existing code) */}
      <AddStudentForm
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
        onAdd={handleAddStudent}
      />
      <EditStudentForm
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        onEdit={handleUpdateStudent}
        student={selectedStudent}
      />
    </div>
  );
}

export default App;
