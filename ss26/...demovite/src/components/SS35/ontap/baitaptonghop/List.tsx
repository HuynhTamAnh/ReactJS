import { Form, ListGroup } from "react-bootstrap";
import { PencilSquare, Trash } from "react-bootstrap-icons";
import { Todo } from "./data";
type PropsType = {
  todos: Todo[];
};
const List = ({ todos }: PropsType) => {
  return (
    <ListGroup className="mt-4">
      {todos.map((todo) => (
        <ListGroup.Item
          key={todo.id}
          className="d-flex justify-content-between"
        >
          <div className="d-flex gap-2">
            <Form.Check type="checkbox" checked={todo.isCompleted} />
            <span>{todo.title}</span>
          </div>
          <div>
            <PencilSquare className="text-warning me-2" />
            <Trash className="text-danger" />
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default List;
