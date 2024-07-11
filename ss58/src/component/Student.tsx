// Student.tsx
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { IStudent } from "../interface";

function Student({ data }: { data: IStudent }) {
  return (
    <Card>
      <Card.Header>{data.id}</Card.Header>
      <Card.Body>
        <Card.Title>
          {data.student_name.length > 30
            ? `${data.student_name.slice(0, 30)}...`
            : data.student_name}
        </Card.Title>
        <Card.Text>{data.email}</Card.Text>
        <Card.Text>{data.address}</Card.Text>
        <Card.Text>{data.phone}</Card.Text>
        <Card.Text>{data.status ? "Active" : "Inactive"}</Card.Text>
        <Card.Text>{new Date(data.created_at).toLocaleDateString()}</Card.Text>
        <Button variant="warning">Edit</Button>
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default Student;
