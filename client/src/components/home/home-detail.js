import React, { useContext } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  CardFooter,
} from "reactstrap";

import BlogContext from "../../context/blog-context";

const BlogDetail = ({ blog }) => {
  const { comments } = useContext(BlogContext);

  const renderComments = () => {
    comments.map((comment, i) => {
      if (comment.blog.toString() === blog._id.toString()) {
        return (
          <CardText key={i}>
            {comment.description} by {comment.author.email}
          </CardText>
        );
      }
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
