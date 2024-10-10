import React from "react";
import { Helmet } from "react-helmet";
const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Blog | Wettify</title>
        <meta name="description" content="This is a description of my page" />
      </Helmet>
      <p>Blog</p>
    </div>
  );
};

export default Blog;
