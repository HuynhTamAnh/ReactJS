import React, { useState } from "react";
import { Alert, Button, Form, InputGroup } from "react-bootstrap";

type Todo = {
  id: number;
  title: string;
  status: boolean;
};

export default function BT11() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "học toán", status: false },
    { id: 2, title: "học code", status: true },
  ]);
  const [newTitle, setNewTitle] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");

  const changeStatus = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Chắc chưa?")) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const handleEdit = (id: number, title: string) => {
    setEditId(id);
    setEditTitle(title);
  };

  const saveEdit = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: editTitle };
        }
        return todo;
      })
    );
    setEditId(null);
    setEditTitle("");
  };

  const addTodo = () => {
    if (newTitle.trim() !== "") {
      const newTodo: Todo = {
        id: todos.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1,
        title: newTitle,
        status: false,
      };
      setTodos([...todos, newTodo]);
      setNewTitle("");
    }
  };

  return (
    <div>
      <h1>Danh sách công việc</h1>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Thêm công việc..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <Button variant="primary" onClick={addTodo}>
          Thêm
        </Button>
      </InputGroup>

      {todos.map((todo) => (
        <Alert key={todo.id} variant="light">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <Form.Check
                checked={todo.status}
                className="me-2"
                onChange={() => changeStatus(todo.id)}
              />
              {editId === todo.id ? (
                <InputGroup className="me-2">
                  <Form.Control
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <Button variant="success" onClick={() => saveEdit(todo.id)}>
                    Lưu
                  </Button>
                </InputGroup>
              ) : (
                <span
                  className={todo.status ? "text-decoration-line-through" : ""}
                >
                  {todo.title}
                </span>
              )}
            </div>
            <div>
              {editId === todo.id ? null : (
                <Button
                  variant="warning me-3"
                  onClick={() => handleEdit(todo.id, todo.title)}
                >
                  Sửa
                </Button>
              )}
              <Button variant="danger" onClick={() => handleDelete(todo.id)}>
                Xoá
              </Button>
            </div>
          </div>
        </Alert>
      ))}
    </div>
  );
}
