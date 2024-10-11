import React from "react";
import { Helmet } from "react-helmet";

const Privacy = ({isContentWide}) => {
  return (
    <div>
      <Helmet>
        <title>Privacy Policy | Wettify</title>
        <meta property="title" content="Privacy Policy | Wettify" />
        <meta property="og:title" content="Privacy Policy | Wettify" />
        <meta name="description" content="View our privacy policy" />
        <meta name="og:description" content="View our privacy policy" />
      </Helmet>
      <div className={`CategoryContent ${isContentWide ? 'Wide' : ''}`} >
      <h1>Privacy Policy</h1>
        <p>
          <b>1. Introduction</b><br />
          Wettify.com values your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you visit our website.<br />
          <b>2. Information We Collect</b><br />
          We may collect the following types of information:Personal Information: Information that can identify you, such as your name, email address, and payment information when you create an account or make a purchase.Usage Data: Information about how you use our website, including your IP address, browser type, pages viewed, and the time spent on our site.Cookies: We use cookies and similar technologies to enhance your experience on our site. You can manage your cookie preferences through your browser settings.<br />
          <b>3. How We Use Your Information</b><br />
          We may use your information for the following purposes:To provide and maintain our servicesTo process transactions and send you confirmationsTo communicate with you, including responding to your inquiries and sending promotional materialsTo improve our website and services based on user feedbackTo comply with legal obligations<br />
          <b>4. Disclosure of Your Information</b><br />
          We may share your information in the following circumstances:With service providers who assist us in operating our website and conducting our businessTo comply with applicable laws, regulations, or legal requestsIn connection with a merger, acquisition, or sale of all or a portion of our assets<br />
          <b>5. Data Security</b><br />
          We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.<br />
          <b>6. Your Rights</b><br />
          Depending on your jurisdiction, you may have the following rights regarding your personal information:The right to access your dataThe right to rectify inaccurate dataThe right to erase your dataThe right to restrict processingThe right to data portability<br />
          <b>7. Third-Party Websites</b><br />
          Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites. We encourage you to review their privacy policies.<br />
          <b>8. Changes to This Privacy Policy</b><br />
          Wettify.com reserves the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date.<br />
          <b>9. Contact Us</b><br />
          If you have any questions or concerns about this Privacy Policy, please contact us at info@wettify.com<br />
          </p>
        </div>
    </div>
  );
};

export default Privacy;
