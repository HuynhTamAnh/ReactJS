import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import {
  getAllProducts,
  createNewProduct,
  deleteProduct,
  updateProduct,
} from "../service/axios";
import { Product } from "../interface";

const Index = () => {
  const products = useSelector((state: RootState) => state.productSlice.items);
  const dispatch = useDispatch<AppDispatch>();

  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [productData, setProductData] = useState<Product>({
    id: 0,
    name: "",
    image: "",
    date_start: "",
    date_end: "",
    status: false,
    function: "",
  });
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleModalClose = () => {
    setShowModal(false);
    setEditingProduct(null);
    setProductData({
      id: 0,
      name: "",
      image: "",
      date_start: "",
      date_end: "",
      status: false,
      function: "",
    });
  };

  const handleModalShow = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setProductData(product);
    }
    setShowModal(true);
  };

  const handleSaveProduct = () => {
    if (editingProduct) {
      dispatch(
        updateProduct({ updatedProduct: productData, id: editingProduct.id })
      );
    } else {
      dispatch(createNewProduct(productData));
    }
    handleModalClose();
  };

  const handleDeleteProduct = (id: number) => {
    dispatch(deleteProduct(id));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: name === "status" ? value === "true" : value,
    }));
  };

  const handleStatusChange = (
    id: number,
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const updatedProduct = products.find(
      (product: Product) => product.id === id
    );
    if (updatedProduct) {
      const updatedProductData = {
        ...updatedProduct,
        status: e.target.value === "true",
      };
      dispatch(updateProduct({ updatedProduct: updatedProductData, id }));
    }
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const filteredProducts = products.filter((product: Product) => {
    if (filter === "all") return true;
    if (filter === "returned") return product.status;
    if (filter === "notReturned") return !product.status;
    return true;
  });

  return (
    <div>
      <Container className="text-center">
        <h1 className="mb-4">Quản lý sản phẩm</h1>
        <Button
          variant="primary"
          className="mb-4"
          onClick={() => handleModalShow()}
        >
          Thêm mới sản phẩm
        </Button>
        <div className="mb-4">
          <Form.Select onChange={handleFilterChange} value={filter}>
            <option value="all">Tất cả</option>
            <option value="returned">Đã trả</option>
            <option value="notReturned">Chưa trả</option>
          </Form.Select>
        </div>
        <Table striped bordered hover className="mx-auto">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Hình ảnh</th>
              <th>Ngày Mượn</th>
              <th>Ngày trả</th>
              <th>Trạng thái</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((d: Product, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{d.name}</td>
                <td>
                  <img
                    src={d.image}
                    alt=""
                    className="img-thumbnail"
                    style={{ height: 80, width: 80 }}
                  />
                </td>
                <td>{d.date_start}</td>
                <td>{d.date_end}</td>
                <td>
                  <Form.Select
                    value={d.status ? "true" : "false"}
                    onChange={(e) => handleStatusChange(d.id, e)}
                    className={
                      d.status
                        ? "bg-success text-white"
                        : "bg-danger text-white"
                    }
                  >
                    <option value="true">Đã trả</option>
                    <option value="false">Chưa trả</option>
                  </Form.Select>
                </td>
                <td>
                  <Button
                    variant="danger"
                    className="me-2"
                    onClick={() => handleDeleteProduct(d.id)}
                  >
                    Xóa
                  </Button>
                  <Button variant="warning" onClick={() => handleModalShow(d)}>
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
              {editingProduct ? "Chỉnh sửa sản phẩm" : "Thêm mới sản phẩm"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Tên</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập tên sản phẩm"
                  name="name"
                  value={productData.name}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Hình ảnh (URL)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập URL hình ảnh"
                  name="image"
                  value={productData.image}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Ngày nhận</Form.Label>
                <Form.Control
                  type="date"
                  name="date_start"
                  value={productData.date_start}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Ngày trả</Form.Label>
                <Form.Control
                  type="date"
                  name="date_end"
                  value={productData.date_end}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Trạng thái</Form.Label>
                <Form.Select
                  name="status"
                  value={productData.status ? "true" : "false"}
                  onChange={handleInputChange}
                >
                  <option value="true">Đã trả</option>
                  <option value="false">Chưa trả</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Đóng
            </Button>
            <Button variant="primary" onClick={handleSaveProduct}>
              {editingProduct ? "Cập nhật sản phẩm" : "Thêm mới sản phẩm"}
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default Index;
