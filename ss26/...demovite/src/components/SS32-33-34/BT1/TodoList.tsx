import React, { Component } from "react";
import { Alert, Button, Form, InputGroup } from "react-bootstrap";

const colors = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

type Todo = {
  id: number;
  title: string;
  status: boolean;
};

type StateType = {
  todos: Todo[];
  editId: number | null;
  editTitle: string;
};

export default class TodoList extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todos: [
        { id: 1, title: "học toán", status: false },
        { id: 2, title: "học code", status: true },
      ],
      editId: null,
      editTitle: "",
    };
  }

  changeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    let id = parseInt(e.target.value, 10);
    let newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }
      return todo;
    });
    this.setState({
      ...this.state,
      todos: newTodos,
    });
  };

  handleDelete = (id: number) => {
    if (window.confirm("chắc chưa?")) {
      let newTodos = this.state.todos.filter((todo) => todo.id !== id);
      this.setState({
        ...this.state,
        todos: newTodos,
      });
    }
  };

  handleEdit = (id: number, title: string) => {
    this.setState({
      editId: id,
      editTitle: title,
    });
  };

  handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      editTitle: e.target.value,
    });
  };

  saveEdit = (id: number) => {
    let newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.title = this.state.editTitle;
      }
      return todo;
    });
    this.setState({
      todos: newTodos,
      editId: null,
      editTitle: "",
    });
  };

  render() {
    return (
      <div>
        <h1>Danh sách công việc</h1>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Enter..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>

        {this.state.todos.map((todo) => {
          let indexRandom = Math.floor(Math.random() * colors.length);
          return (
            <Alert key={todo.id} variant={colors[indexRandom]}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <Form.Check
                    defaultChecked={todo.status}
                    className="me-2"
                    value={todo.id}
                    onChange={this.changeStatus}
                  />
                  {this.state.editId === todo.id ? (
                    <InputGroup className="me-2">
                      <Form.Control
                        value={this.state.editTitle}
                        onChange={this.handleEditChange}
                      />
                      <Button
                        variant="success"
                        onClick={() => this.saveEdit(todo.id)}
                      >
                        Save
                      </Button>
                    </InputGroup>
                  ) : (
                    <span
                      className={
                        todo.status ? "text-decoration-line-through" : ""
                      }
                    >
                      {todo.title}
                    </span>
                  )}
                </div>
                <div>
                  {this.state.editId === todo.id ? null : (
                    <Button
                      variant="warning me-3"
                      onClick={() => this.handleEdit(todo.id, todo.title)}
                    >
                      Sửa
                    </Button>
                  )}
                  <Button
                    variant="danger"
                    onClick={() => this.handleDelete(todo.id)}
                  >
                    Xoá
                  </Button>
                </div>
              </div>
            </Alert>
          );
        })}
      </div>
    );
  }
}
