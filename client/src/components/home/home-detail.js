import axios from "axios";
import {
  Card,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);

  async function blogWithComments() {
    const blogRes = await axios.get(`http://localhost:3000/blog/${id}`);
    const { blog, comments } = blogRes.data;
    setBlog(blog);
    setComments(comments);
  }

  useEffect(async () => {
    await blogWithComments();
    console.log(blog.author);
  }, []);

  const renderComments = () => {
    comments.map((comment, i) => {
      return (
        <CardText key={i}>
          {comment.description} by
          {comment.author ? comment.author.email : undefined}
        </CardText>
      );
    });
  };

  return (
    <CardDeck>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{blog.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            By {blog.author ? blog.author.email : undefined} At {blog.createdAt}
          </CardSubtitle>
          <CardText>{blog.description}</CardText>
          {renderComments()}
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default BlogDetail;
