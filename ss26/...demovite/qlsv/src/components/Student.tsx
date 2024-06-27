import { useMemo, useState } from "react";
import { data as initData } from "./data";
import React from "react";
import "./css/Student.css";

type Action = "ADD" | "EDIT" | "DELETE" | "BLOCK" | "";

type Student = {
  id: number;
  name: string;
  dateOfbirth: string;
  email: string;
  address: string;
  status: boolean;
};

const initState = {
  id: 0,
  name: "",
  dateOfbirth: "",
  email: "",
  address: "",
  status: true,
};

const Student = () => {
  const [data, setData] = useState(initData); // data là mảng chứa các dữ liệu mẫu
  const [action, setAction] = useState<Action>(""); // thao tác của người dùng (block , delete, add, edit)
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Student>(initState); // dùng để lưu trữ đối tượng đang thao tác ()
  const [size, setSize] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // state to manage search query

  const handleOpenModal = (action: Action) => {
    setAction(action); // thay đổi hành động
    setIsOpen(true); // mở modal
  };
  const handleCloseModal = () => {
    setAction(""); // xoá hành động
    setIsOpen(false); // đóng modal
  };

  // hàm xóa
  const handleDelete = () => {
    const newData = data.filter((stu) => stu.id !== selected.id);
    setData(newData);
    setAction("");
    setIsOpen(false);
  };
  // thay đổi trạng thái
  const handleBlock = () => {
    const newData = data.map((stu) => {
      //chỉnh sủa trạng thái
      if (stu.id === selected.id) {
        // cập nhật trạng thái
        stu.status = !stu.status;
      }
      return stu;
    });
    // map để chuyển đổi lần lượt từng phần tử của mảng nãy thành mảng kia
    // hàm bên trong của hàm map return về
    setData(newData);
    setAction("");
    setIsOpen(false);
  };
  // quản lí sự thay đổi ô input
  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let name = e.target.name;
    let value = e.target.value;
    setSelected({ ...selected, [name]: value });
  };

  // xử lí submit form
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // loại bỏ sự kiện load trang
    // phân chia chức năng
    if (action == "ADD") {
      // thêm mới
      const newStudent: Student = {
        ...selected,
        id: data[data.length - 1].id + 1,
        status: true,
      };
      setData([...data, newStudent]); //
    } else {
      // chỉnh sửa
      const newData = data.map((stu) => {
        if (stu.id === selected.id) {
          stu = selected;
        }
        return stu;
      });
      setData(newData);
    }
    setAction("");
    setIsOpen(false);
  };

  // handle search query change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // tính tổng số trang
  const totalPages = useMemo(() => {
    return Math.ceil(data.length / size);
  }, [data, size]);

  // lọc các phần tử theo size và search query
  const filterData = useMemo(() => {
    const filtered = data.filter((stu) =>
      stu.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const start = (currentPage - 1) * size;
    const end = currentPage * size; //start<=index<=end
    return filtered.slice(start, end);
  }, [data, currentPage, size, searchQuery]);

  return (
    <>
      <div>
        <div className="w-[80%] m-auto mt-4 h-[100vh]">
          <main className="main">
            <header className="d-flex justify-content-between mb-3">
              <h3>Nhân viên</h3>
              <button
                className="btn btn-primary"
                onClick={() => handleOpenModal("ADD")}
              >
                Thêm mới nhân viên
              </button>
            </header>
            <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
              <input
                style={{ width: 350 }}
                type="text"
                className="form-control"
                placeholder="Tìm kiếm theo email"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <i className="fa-solid fa-arrows-rotate" title="Refresh" />
            </div>
            {/* Danh sách nhân viên */}
            <table className="table table-bordered table-hover table-striped">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Họ và tên</th>
                  <th>Ngày sinh</th>
                  <th>Email</th>
                  <th>Địa chỉ</th>
                  <th>Trạng thái</th>
                  <th colSpan={3}>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {filterData.map((student, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.dateOfbirth}</td>
                    <td>{student.email}</td>
                    <td>{student.address}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <div
                          className={`status status-${
                            student.status ? "active" : "stop"
                          }`}
                        />
                        <span>
                          {student.status
                            ? "Đang hoạt động"
                            : "Ngừng hoạt động"}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span
                        className={`button button-${
                          student.status ? "block" : "unblock"
                        }`}
                        onClick={() => {
                          handleOpenModal("BLOCK");
                          setSelected(student);
                        }}
                      >
                        {student.status ? "Chặn" : "Mở Chặn"}
                      </span>
                    </td>
                    <td>
                      <span
                        className="button button-edit"
                        onClick={() => {
                          handleOpenModal("EDIT");
                          setSelected(student);
                        }}
                      >
                        Sửa
                      </span>
                    </td>
                    <td>
                      <span
                        className="button button-delete"
                        onClick={() => {
                          handleOpenModal("DELETE");
                          // cập nhật selected
                          setSelected(student);
                        }}
                      >
                        Xóa
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <footer className="d-flex justify-content-end align-items-center gap-3">
              <select
                className="form-select"
                defaultValue={20}
                onChange={(e) => setSize(Number(e.target.value))}
              >
                <option value={10}>Hiển thị 10 bản ghi trên trang</option>
                <option value={20}>Hiển thị 20 bản ghi trên trang</option>
                <option value={50}>Hiển thị 50 bản ghi trên trang</option>
                <option value={100}>Hiển thị 100 bản ghi trên trang</option>
              </select>
              <ul className="pagination">
                <li
                  className={`page-item ${currentPage == 1 ? "disabled" : ""}`}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    Previous
                  </a>
                </li>

                {Array.from(new Array(totalPages), (_, index) => index + 1).map(
                  (page, index) => (
                    <li
                      className={`page-item ${
                        currentPage == page ? "active" : ""
                      }`}
                      key={index}
                    >
                      <a
                        className="page-link"
                        href="#"
                        onClick={() => setCurrentPage(page)}
                      >
                        {index + 1}
                      </a>
                    </li>
                  )
                )}
                <li
                  className={`page-item ${
                    currentPage == totalPages ? "disabled" : ""
                  }`}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Next
                  </a>
                </li>
              </ul>
            </footer>
          </main>
        </div>
        {/* Form thêm mới/ chỉnh sửa nhân viên */}
        <div
          className="overlay"
          hidden={!((action == "EDIT" || action == "ADD") && isOpen)}
        >
          <form className="form" onSubmit={handleSubmitForm}>
            <div className="d-flex justify-content-between align-items-center">
              <h4>{action === "ADD" ? "Thêm mới" : "Chỉnh Sửa"} nhân viên</h4>
              <i className="fa-solid fa-xmark" onClick={handleCloseModal} />
            </div>
            <div>
              <label className="form-label" htmlFor="userName">
                Họ và tên
              </label>
              <input
                id="userName"
                type="text"
                name="name"
                value={selected.name}
                onChange={handleChangeInput}
                className="form-control"
              />
              {/* <div class="form-text error">Họ và tên không được để trống.</div> */}
            </div>
            <div>
              <label className="form-label" htmlFor="dateOfBirth">
                Ngày sinh
              </label>
              <input
                id="dateOfBirth"
                name="dateOfbirth"
                value={selected.dateOfbirth}
                onChange={handleChangeInput}
                type="date"
                className="form-control"
              />
            </div>
            {/* <div class="form-text error">Ngày sinh không được lớn hơn ngày hiện tại.
  </div> */}
            <div>
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                value={selected.email}
                onChange={handleChangeInput}
                type="text"
                className="form-control"
              />
            </div>
            {/* <div class="form-text error">Email không được để trống.</div> */}
            <div>
              <label className="form-label" htmlFor="address">
                Địa chỉ
              </label>
              <textarea
                className="form-control"
                name="address"
                value={selected.address}
                onChange={handleChangeInput}
                id="address"
                rows={3}
                defaultValue={""}
              />
            </div>
            <div>
              <button type="submit" className="w-100 btn btn-primary">
                {action == "ADD" ? "Thêm mới" : "Cập nhật"}
              </button>
            </div>
          </form>
        </div>
        {/* Modal xác nhận chặn tài khoản */}
        <div className="overlay" hidden={!(action == "BLOCK" && isOpen)}>
          <div className="modal-custom">
            <div className="modal-title">
              <h4>Cảnh báo</h4>
              <i className="fa-solid fa-xmark" onClick={handleCloseModal} />
            </div>
            <div className="modal-body-custom">
              <span>{`Bạn có chắc chắn muốn ${
                selected.status ? "chặn" : "mở chặn"
              } tài khoản này?`}</span>
            </div>
            <div className="modal-footer-custom">
              <button className="btn btn-light" onClick={handleCloseModal}>
                Hủy
              </button>
              <button className="btn btn-danger" onClick={handleBlock}>
                Xác nhận
              </button>
            </div>
          </div>
        </div>
        {/* Modal xác nhận xóa tài khoản */}
        <div className="overlay" hidden={!(action == "DELETE" && isOpen)}>
          <div className="modal-custom">
            <div className="modal-title">
              <h4>Cảnh báo</h4>
              <i className="fa-solid fa-xmark" onClick={handleCloseModal} />
            </div>
            <div className="modal-body-custom">
              <span>Bạn có chắc chắn muốn xóa tài khoản này?</span>
            </div>
            <div className="modal-footer-custom">
              <button className="btn btn-light" onClick={handleCloseModal}>
                Hủy
              </button>
              <button className="btn btn-danger" onClick={handleDelete}>
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
