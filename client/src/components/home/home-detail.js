import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  CardFooter,
} from "reactstrap";

const BlogDetail = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);

  async function blogWithComments() {
    const blogRes = await axios.get(`http://localhost:3000/blog/${id}`);
    setBlog(blogRes.data.blog);
    setComments(blogRes.data.comments);
  }

  useEffect(() => {
    blogWithComments();
  }, []);

  const renderComments = () => {
    comments.map((comment, i) => {
      return (
        <CardText key={i}>
          {comment.description} by {comment.author.email}
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
            By {blog.author.email} At {blog.createdAt}
          </CardSubtitle>
          <CardText>{blog.description}</CardText>
          <CardFooter>{renderComments()}</CardFooter>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default BlogDetail;
