import { useState } from "react";
import FormTodo from "./Form";
import List from "./List";
import Notify from "./Notify";
import { data } from "./data";

const TodoManager = () => {
  // tạo 1 state để  lưu trữ và quản lí danh sách công việc
  const [todos, setTodos] = useState(data);
  // thêm mới
  const handleAdd = (title: string) => {
    const newTodo = {
      id: todos[todos.length - 1].id + 1,
      title: title,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <h1 className="text-center">Danh sách công việc</h1>
      <FormTodo handleAdd={handleAdd} />
      <List todos={todos} />
      <Notify />
    </div>
  );
};

export default TodoManager;
