import React from "react";
import { Button } from "react-bootstrap";
import { IStudent } from "../interface/index";

interface StudentRowProps {
  data: IStudent;
  onDelete: (id: number) => void;
  onEdit: (student: IStudent) => void;
}

const StudentRow: React.FC<StudentRowProps> = ({ data, onDelete, onEdit }) => {
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.student_name}</td>
      <td>{data.email}</td>
      <td>{data.address}</td>
      <td>{data.phone}</td>
      <td>{data.status ? "Đang học" : "Đã nghỉ"}</td>
      <td>
        <Button variant="warning" onClick={() => onEdit(data)}>
          Sửa
        </Button>
        <Button variant="danger" onClick={() => onDelete(data.id)}>
          Xóa
        </Button>
      </td>
    </tr>
  );
};

export default StudentRow;
