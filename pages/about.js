import React from "react";
import Head from "next/head";

const About = () => {
  return (
    <div className="About">
      <Head>
        <title>About Us | Wettify</title>
        <meta property="title" content="About Us | Wettify" />
        <meta property="og:title" content="About Us | Wettify" />
        <meta
          property="og:description"
          content="Read and explore about us"
        />
        <meta
          name="description"
          content="Read and explore about us"
        ></meta>
      </Head>
      <p>About</p>
    </div>
  );
};

export default About;
