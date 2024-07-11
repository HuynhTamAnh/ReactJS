import axios from "axios";
import { IStudent } from "../interface";

export const getStudentsWithPaginate = async (
  page: number,
  perPage: number
): Promise<IStudent[]> => {
  const response = await axios.get(
    `http://localhost:9999/student?_page=${page}&_per_page=${perPage}`
  );
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Lỗi khi lấy danh sách sinh viên");
  }
};

export const deleteStudent = async (id: number): Promise<void> => {
  const response = await axios.delete(`http://localhost:9999/student/${id}`);
  if (response.status !== 200) {
    throw new Error("Lỗi khi xóa sinh viên");
  }
};

export const addStudent = async (
  student: Omit<IStudent, "id" | "created_at">
): Promise<IStudent> => {
  const response = await axios.post("http://localhost:9999/student", student);
  if (response.status === 201) {
    return response.data;
  } else {
    throw new Error("Lỗi khi thêm sinh viên");
  }
};
export const updateStudent = async (student: IStudent): Promise<IStudent> => {
  const response = await axios.put(
    `http://localhost:9999/student/${student.id}`,
    student
  );
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Lỗi khi cập nhật sinh viên");
  }
};
