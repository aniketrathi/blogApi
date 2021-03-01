import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const BlogContext = createContext();

function BlogContextProvider(props) {
  const [blogs, setBlog] = useState([]);

  async function getBlog() {
    const blogRes = await axios.get("http://localhost:3000/blog");

    setBlog(blogRes.data);
  }

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, getBlog }}>
      {props.children}
    </BlogContext.Provider>
  );
}

export default BlogContext;
export { BlogContextProvider };
