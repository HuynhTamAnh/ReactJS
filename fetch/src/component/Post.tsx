import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { IPost } from "../interface";

const Post = ({ data }: { data: IPost }) => {
  return (
    <div>
      <Card>
        <Card.Header>#{data.id}</Card.Header>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.body}</Card.Text>
          <Button variant="info">CHON</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
