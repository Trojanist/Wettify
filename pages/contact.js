import React from "react";
import { Helmet } from "react-helmet";
import ContactBox from "../components/ContactBox";
import styles from "../styles/Contact.module.css";
import Logo from "../public/wettify-logo.png"

const Contact = () => {
  return (
    <div>
      <Helmet>
      <meta charSet="utf-8" />
        <title>Contact | Wettify.com</title>
        <meta property="og:title" content="Contact | Wettify.com" />
        <link rel="canonical" href="https://wettify.com/contact" />
        <meta name="robots" content="index, follow" />
      </Helmet>
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
