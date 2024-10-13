import React from "react";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <div className="About">
      <Helmet>
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
      </Helmet>
      <p>About</p>
    </div>
  );
};

export default About;
