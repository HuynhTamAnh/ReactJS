import React, {
  useState,
  useCallback,
  useEffect,
  ChangeEvent,
  FormEvent,
} from "react";
import "./css/Student.css";
import { data as initData } from "./data";

interface StudentData {
  id: number;
  name: string;
  dateOfbirth: string;
  email: string;
  address: string;
  status: boolean;
}

type FormState = {
  id: number | null;
  name: string;
  dateOfbirth: string;
  email: string;
  address: string;
  status: boolean;
};

type ModalType = "create" | "update" | "delete" | "block" | "";

const Student: React.FC = () => {
  const [data, setData] = useState<StudentData[]>(initData);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [formState, setFormState] = useState<FormState>({
    id: null,
    name: "",
    dateOfbirth: "",
    email: "",
    address: "",
    status: true,
  });
  const [modalType, setModalType] = useState<ModalType>("");
  const [selectedUser, setSelectedUser] = useState<StudentData | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleRefresh = () => {
    setSearchTerm("");
  };

  const handleOpenModal = useCallback(
    (type: ModalType, user: StudentData | null = null) => {
      setModalType(type);
      setSelectedUser(user);
      if (user) {
        setSelectedUserId(user.id);
        setFormState(user);
      } else {
        setFormState({
          id: null,
          name: "",
          dateOfbirth: "",
          email: "",
          address: "",
          status: true,
        });
      }
    },
    []
  );

  const handleCloseModal = () => {
    setModalType("");
    setSelectedUser(null);
    setSelectedUserId(null);
    setFormState({
      id: null,
      name: "",
      dateOfbirth: "",
      email: "",
      address: "",
      status: true,
    });
  };

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (modalType === "create") {
      setData((prev) => [...prev, { ...formState, id: prev.length + 1 }]);
    } else if (modalType === "update" && formState.id) {
      setData((prev: any) =>
        prev.map((item: any) => (item.id === formState.id ? formState : item))
      );
    }
    handleCloseModal();
  };

  const handleDelete = useCallback(() => {
    if (selectedUserId !== null) {
      setData((prev) => prev.filter((item) => item.id !== selectedUserId));
    }
    handleCloseModal();
  }, [selectedUserId]);

  const handleToggleStatus = useCallback(() => {
    if (selectedUserId !== null) {
      setData((prev) =>
        prev.map((item) =>
          item.id === selectedUserId ? { ...item, status: !item.status } : item
        )
      );
    }
    handleCloseModal();
  }, [selectedUserId]);

  useEffect(() => {
    if (selectedUser) {
      setSelectedUserId(selectedUser.id);
    }
  }, [selectedUser]);

  const filteredData = data.filter((user) =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="w-[80%] m-auto mt-4 h-[100vh]">
        <main className="main">
          <header className="d-flex justify-content-between mb-3">
            <h3>Nhân viên</h3>
            <button
              className="btn btn-primary"
              onClick={() => handleOpenModal("create")}
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
              value={searchTerm}
              onChange={handleSearch}
            />
            <i
              className="fa-solid fa-arrows-rotate"
              title="Refresh"
              onClick={handleRefresh}
            />
          </div>

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
              {filteredData.map((stu, index) => (
                <tr key={stu.id}>
                  <td>{index + 1}</td>
                  <td>{stu.name}</td>
                  <td>{stu.dateOfbirth}</td>
                  <td>{stu.email}</td>
                  <td>{stu.address}</td>
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
                          stu.status ? "active" : "stop"
                        }`}
                      />
                      <span>
                        {stu.status ? "Đang hoạt động" : "Ngừng hoạt động"}
                      </span>
                    </div>
                  </td>
                  <td>
                    <span
                      className="button button-block"
                      onClick={() => handleOpenModal("block", stu)}
                    >
                      {stu.status ? "Chặn" : "Bỏ chặn"}
                    </span>
                  </td>
                  <td>
                    <span
                      className="button button-edit"
                      onClick={() => handleOpenModal("update", stu)}
                    >
                      Sửa
                    </span>
                  </td>
                  <td>
                    <span
                      className="button button-delete"
                      onClick={() => handleOpenModal("delete", stu)}
                    >
                      Xóa
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <footer className="d-flex justify-content-end align-items-center gap-3">
            <select className="form-select">
              <option>Hiển thị 10 bản ghi trên trang</option>
              <option>Hiển thị 20 bản ghi trên trang</option>
              <option>Hiển thị 50 bản ghi trên trang</option>
              <option>Hiển thị 100 bản ghi trên trang</option>
            </select>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </footer>
        </main>
      </div>

      {modalType && (
        <div className="overlay">
          {modalType === "create" || modalType === "update" ? (
            <form className="form" onSubmit={handleFormSubmit}>
              <div className="d-flex justify-content-between align-items-center">
                <h4>
                  {modalType === "create" ? "Thêm mới" : "Chỉnh sửa"} nhân viên
                </h4>
                <i className="fa-solid fa-xmark" onClick={handleCloseModal} />
              </div>
              <div>
                <label className="form-label" htmlFor="name">
                  Họ và tên
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  value={formState.name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label className="form-label" htmlFor="dateOfbirth">
                  Ngày sinh
                </label>
                <input
                  id="dateOfbirth"
                  type="date"
                  className="form-control"
                  value={formState.dateOfbirth}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  value={formState.email}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label className="form-label" htmlFor="address">
                  Địa chỉ
                </label>
                <textarea
                  className="form-control"
                  id="address"
                  rows={3}
                  value={formState.address}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="d-flex justify-content-end align-items-center gap-2">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={handleCloseModal}
                >
                  Hủy
                </button>
                <button className="btn btn-primary" type="submit">
                  {modalType === "create" ? "Thêm mới" : "Chỉnh sửa"}
                </button>
              </div>
            </form>
          ) : modalType === "delete" ? (
            <div className="modal-custom">
              <div className="modal-title">
                <h4>Xóa nhân viên</h4>
                <i className="fa-solid fa-xmark" onClick={handleCloseModal} />
              </div>
              <div className="modal-body-custom">
                <span>Bạn có chắc chắn muốn xóa nhân viên này không?</span>
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
          ) : (
            modalType === "block" && (
              <div className="modal-custom">
                <div className="modal-title">
                  <h4>Cảnh báo</h4>
                  <i className="fa-solid fa-xmark" onClick={handleCloseModal} />
                </div>
                <div className="modal-body-custom">
                  <span>
                    Bạn có chắc chắn muốn{" "}
                    {selectedUser?.status ? "chặn" : "bỏ chặn"} tài khoản này?
                  </span>
                </div>
                <div className="modal-footer-custom">
                  <button className="btn btn-light" onClick={handleCloseModal}>
                    Hủy
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={handleToggleStatus}
                  >
                    Xác nhận
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Student;
