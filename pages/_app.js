import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CategoriesBar from "../components/CategoriesBar";
import "../styles/global.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import CookieBanner from "../components/CookieBanner";
import ReactGA from 'react-ga';
function MyApp({ Component, pageProps }) {

  const [isCategoriesBarVisible, setCategoriesBarVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 850) {
        setCategoriesBarVisible(false);
      } else {
        setCategoriesBarVisible(true);
      }
    };

    document.getElementById("__next").id = "wettify-wrapper";

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

    if (Cookies.get('userConsent') === 'true') {
      ReactGA.initialize('G-V0JVFZKP0J');
    }
  }, []);

  const toggleCategoriesBar = () => {
    setCategoriesBarVisible(!isCategoriesBarVisible);
  };

  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Discover the hottest live cam girls online! Enjoy private chats or camgirls live shows with beautiful models ready to entertain you" />
      </Head>
      <Script id="gtag-script" async src="https://www.googletagmanager.com/gtag/js?id=G-V0JVFZKP0J" />
        <Script 
        id="google-gtag"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-V0JVFZKP0J');
            `,
          }}
        />
      <Navbar toggleCategoriesBar={toggleCategoriesBar} />
      <SpeedInsights />
      <CategoriesBar isVisible={isCategoriesBarVisible} />
      <CookieBanner />
      <Component {...pageProps} isContentWide={!isCategoriesBarVisible} />
    </>
  );
}

export default MyApp;