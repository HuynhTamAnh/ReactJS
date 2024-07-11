// src/components/StudentTable.tsx
import React from "react";
import { Table, Form } from "react-bootstrap";
import StudentRow from "./StudentRow";
import { IStudent } from "../interface";

const StudentTable: React.FC<{ students: IStudent[] }> = ({ students }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>
            <Form.Check type="checkbox" />
          </th>
          <th>Tên sinh viên</th>
          <th>Email</th>
          <th>Địa chỉ</th>
          <th>Số điện thoại</th>
          <th>Lựa chọn</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <StudentRow key={student.id} student={student} />
        ))}
      </tbody>
    </Table>
  );
};

export default StudentTable;
