import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter from Next.js
import Navbar from '../components/Navbar'
import CategoriesBar from '../components/CategoriesBar'
import '../styles/global.css'
import { useEffect } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"

function MyApp({ Component, pageProps }) {

    const router = useRouter(); // Use the router hook to get router object
  
    const [isCategoriesBarVisible, setCategoriesBarVisible] = useState(true);

      useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 850) {
        setCategoriesBarVisible(false);
      } else {
        setCategoriesBarVisible(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    const toggleCategoriesBar = () => {
      setCategoriesBarVisible(!isCategoriesBarVisible);
    };


    
  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-V0JVFZKP0J"></script>
        <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-V0JVFZKP0J');
            `,
            }}

            
          />
      </Head>
      <Navbar toggleCategoriesBar={toggleCategoriesBar} />
      <SpeedInsights />
      <CategoriesBar isVisible={isCategoriesBarVisible} />
      <Component {...pageProps}
              isContentWide={!isCategoriesBarVisible}
      />
      </>
  );
}

export default MyApp;