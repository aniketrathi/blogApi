import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const BlogContext = createContext();

function BlogContextProvider(props) {
  const [blogs, setBlog] = useState([]);
  const [comments, setComment] = useState([]);

  async function getBlog() {
    const blogRes = await axios.get("http://localhost:3000/blog");

    setBlog(blogRes.data.blogs);

    setComment(blogRes.data.comments);
  }

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, getBlog, comments }}>
      {props.children}
    </BlogContext.Provider>
  );
}

export default BlogContext;
export { BlogContextProvider };
