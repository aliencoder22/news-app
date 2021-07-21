import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Post.css";
import { useDispatch } from "react-redux";

export default function Post({
  title,
  url,
  imageUrl,
  content,
  description,
  id,
}) {
  const dispatch = useDispatch();
  const deletePostHandler = (id) => {
    dispatch({ type: "DELETE_POST", value: id });
  };

  return (
    <Card className="Card">
      <Card.Img variant="top" src={imageUrl} className="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description ? description.slice(0, 100) : ""}</Card.Text>
      </Card.Body>
      <Card.Footer className="footer">
        <Button onClick={() => deletePostHandler(id)}>Delete</Button>
        <Button onClick={() => window.open(url, "_blank")} variant="danger">
          News Article
        </Button>
      </Card.Footer>
    </Card>
  );
}
