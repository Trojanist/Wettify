import React from "react";
import Head from "next/head";

const Blog = () => {
  return (
    <div>
      <Head>
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
      </Head>
      <p>Blog</p>
    </div>
  );
};

export default Blog;
