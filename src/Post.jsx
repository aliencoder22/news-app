import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Post.css";

export default function Post({ title, url, imageUrl, content, description }) {
  return (
    <Card className="Card">
      <Card.Img variant="top" src={imageUrl} className="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description ? description.slice(0, 100) : ""}</Card.Text>
      </Card.Body>
      <Card.Footer className="footer">
        <Button onClick={() => window.open(url, "_blank")} variant="danger">
          News Article
        </Button>
      </Card.Footer>
    </Card>
  );
}
