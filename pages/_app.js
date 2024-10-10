import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter from Next.js
import Navbar from '../components/Navbar'
import CategoriesBar from '../components/CategoriesBar'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {

    const router = useRouter(); // Use the router hook to get router object
  
    const [isCategoriesBarVisible, setCategoriesBarVisible] = useState(true);

    const toggleCategoriesBar = () => {
      setCategoriesBarVisible(!isCategoriesBarVisible);
    };

  return (
    <>
      <Head>

      </Head>
      <Navbar toggleCategoriesBar={toggleCategoriesBar} />
      <CategoriesBar isVisible={isCategoriesBarVisible} />
      <Component {...pageProps}
              isContentWide={!isCategoriesBarVisible}
      />
      </>
  );
}

export default MyApp;