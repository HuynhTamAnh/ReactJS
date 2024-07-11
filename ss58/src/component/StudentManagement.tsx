// src/components/StudentManagement.tsx
import React, { useEffect, useState } from "react";
import { Button, Pagination, Row, Col } from "react-bootstrap";
import StudentTable from "./StudentTable";
import { IStudent } from "../interface";
import { getPostWithPaginate } from "../service/students"; // Adjust the import based on your service location

const StudentManagement: React.FC = () => {
  const [students, setStudents] = useState<IStudent[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 5;

  useEffect(() => {
    getPostWithPaginate(currentPage, studentsPerPage).then((data) =>
      setStudents(data)
    );
  }, [currentPage]);

  const totalPages = Math.ceil(100 / studentsPerPage); // Adjust 100 to the actual number of students

  return (
    <div className="container mt-4">
      <h4 className="mb-4">Quản lý sinh viên</h4>
      <Button variant="success" className="mb-3">
        + Thêm mới sinh viên
      </Button>
      <StudentTable students={students} />
      <div className="pagination mt-4 d-flex justify-content-between">
        <div>
          Hiển thị {students.length}/{100} bản ghi
        </div>{" "}
        {/* Adjust 100 to the actual number of students */}
        <Pagination>
          <Pagination.Prev
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </div>
  );
};

export default StudentManagement;
