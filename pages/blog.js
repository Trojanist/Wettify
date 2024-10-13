import React from "react";
import { Helmet } from "react-helmet";
const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Blog | Wettify</title>
        <meta property="title" content="Blog | Wettify" />
        <meta property="og:title" content="Blog | Wettify" />
        <meta
          property="og:description"
          content="Explore our blog"
        />
        <meta
          name="description"
          content="Explore our blog"
        ></meta>
        <meta name="robots" content="index, follow" />
      </Helmet>
      <p>Blog</p>
    </div>
  );
};

export default Blog;
