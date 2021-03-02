import React, { useContext } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";

import AuthContext from "../../context/auth-context";
import BlogContext from "../../context/blog-context";

const Blog = () => {
  const { blogs } = useContext(BlogContext);
  const { loggedIn } = useContext(AuthContext);

  const renderBlogs = () => {
    return blogs.map((blog, i) => {
      return (
        <Card key={i}>
          <CardBody>
            <CardTitle tag="h5">{blog.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              By {blog.author.email} At {blog.createdAt}
            </CardSubtitle>
            <CardText>{blog.description}</CardText>
          </CardBody>
          {loggedIn === true && <Link to={`/blog/${blog._id}`}>View More</Link>}
        </Card>
      );
    });
  };
  return <CardDeck>{renderBlogs()}</CardDeck>;
};

export default Blog;
