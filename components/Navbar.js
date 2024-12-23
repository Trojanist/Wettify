import React from "react";
import Menu from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import Logo from '../public/wettify-logo.webp'
import Link from "next/link";
import styles from '../styles/Navbar.module.css'
import Image from "next/image";

const Navbar = ({toggleCategoriesBar} ) => {

  return (
    <div className={styles.Navbar}>
      <div className={styles.UpperNavbar}>
        <div className={styles.UpperNavbarLeftSide}>
          <button className={styles.IconButton} title="LeftNavbarInandOut" onClick={toggleCategoriesBar}>
            <Menu fontSize="large" />
          </button>
         </div>
        <div className={styles.LogoBox}>
          <Link href="/"><Image src={Logo} alt="wettify" unoptimized={true} priority={true} /></Link>
        </div>
        <div className={styles.UpperNavbarRightSide}>
          <div className={styles.AdBanner}>
            <iframe width="300" height="50" src="https://bngprm.com/promo.php?c=810376&type=banner&size=300x50&name=st_vday24" marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0"></iframe>
          </div>
        </div>
      </div>
      <div className={styles.DownNavBar}>
        <div className={styles.TopCategories}>
          <Link href="/cam-to-cam">Cam To Cam</Link>
          <Link href="/top-cam-rooms">Top Cam Rooms</Link>
          <Link href="/random-cam-room">Random Cam Room</Link>
          <Link href="/free-rooms">Free Rooms</Link>
          <Link href="/top-models">Top Models</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
