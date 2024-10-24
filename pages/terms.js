import React from "react";
import Head from "next/head";

const Terms = ({isContentWide}) => {
  return (
    <div>
      <Head>
        <title>Terms & Conditions | Wettify</title>
        <meta property="title" content="Terms & Conditions | Wettify" />
        <meta property="og:title" content="Terms & Conditions | Wettify" />
        <meta name="description" content="View our terms and conditions" />
        <meta name="og:description" content="View our terms and conditions" />
      </Head>
      <div className={`CategoryContent ${isContentWide ? 'Wide' : ''}`} >
      <h1>Terms and Conditions</h1>
      <p className="PageTextContent">
        <b>1.Acceptance of Terms</b><br />
        By accessing and using Wettify.com, you agree to comply with these Terms and Conditions and all applicable laws. If you do not agree, you must not use this website.<br />
        <b>2. Age Requirement</b><br />
        You must be at least 18 years old (or the age of majority in your jurisdiction) to access this website. By using this site, you confirm that you meet this age requirement.<br />
        <b>3. User Accounts</b><br />
        To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities under your account.<br />
        <b>4. Content Disclaimer</b><br />
        Wettify.com provides adult content intended for entertainment purposes only. We do not endorse any of the content displayed on the site. Users are advised to view content responsibly.<br />
        <b>5. User Conduct</b><br />
        You agree to use the website in a manner that is lawful and respectful. Prohibited activities include: Harassment or abuse of any user or performerDistribution of spam or malicious softwareSharing of personal information without consent.<br />
        <b>6. Intellectual Property</b><br />
        All content, trademarks, and other intellectual property on Wettify.com are owned by or licensed to the website. Unauthorized use of any materials is prohibited.<br />
        <b>7. Limitation of Liability</b><br />
        Wettify.com is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the site or its content.<br />
        <b>8. Indemnification</b><br />
        You agree to indemnify and hold harmless Wettify.com and its affiliates from any claims, losses, and expenses, including legal fees, arising from your use of the website.<br />
        <b>9. Changes to Terms</b><br />
        Wettify.com reserves the right to modify these Terms and Conditions at any time. Changes will be effective upon posting on the website.<br />
        <b>10. Contact Information</b><br />
        For any questions or concerns regarding these Terms and Conditions, please contact us at info@wettify.com.</p>
        </div>
    </div>
  );
};

export default Terms;