import React from "react";
import Head from "next/head";
import ContactBox from "../components/ContactBox";
import styles from "../styles/Contact.module.css";
import Logo from "../public/wettify-logo.webp"

const Contact = () => {
  return (
    <div>
      <Head>
      <meta charSet="utf-8" />
        <title>Contact | Wettify</title>
        <meta property="title" content="Contact | Wettify" />
        <meta property="og:title" content="Contact | Wettify" />
        <link rel="canonical" href="https://wettify.com/contact" />
      </Head>
      <div className={styles.contact}>
      <div className={styles.contactOptions}>
        <ContactBox
          title={"Email"}
          content={"info@wettify.com"}
          icon={Logo}
        />
      </div>
    </div>
    </div>
  );
};

export default Contact;

