import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import styles from '../styles/CookiesPopup.module.css'
import CookieLogo from '../public/cookie.webp'
import Image from 'next/image';
const CookieBanner = () => {
  const [cookies, setCookies] = useState(false);

  useEffect(() => {
    // Check if the consent cookie is set
    if (!Cookies.get('userConsent')) {
        setCookies(true);
    }
  }, []);

  const acceptCookies = () => {
    // Set a consent cookie if the user accepts
    Cookies.set('userConsent', 'true', { expires: 365 });
    setCookies(false);
    // Initialize Google Analytics or other tracking here
  };

  return (
    cookies && (
      <div className={styles.cookieConsent}>
        <Image src={CookieLogo} alt="wettify" unoptimized={true} priority={true} className={styles.cookieImg} />
        <div className={styles.cookieText}>
            <p>We use cookies to improve your experience. By accepting, you agree to our use of cookies. <a href="/privacy" target="_blank">Learn more</a>.</p>
            <button onClick={acceptCookies} id="acceptCookies" className={styles.cookieBtn}>Accept</button>
            <button id="rejectCookies" className={styles.cookieBtn}>Reject</button>
        </div>
      </div>

    )
  );
};

export default CookieBanner;