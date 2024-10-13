import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import CategoriesJson from '../public/data/categories.json';
import styles from '../styles/CategoriesBar.module.css';
import { debounce } from 'lodash'; // import lodash for debounce

const CategoriesBar = ({ isVisible }) => {
  const [categories] = useState(CategoriesJson); // Directly use the imported JSON
  const [error] = useState(null); // Error handling can be omitted unless needed
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = useCallback(debounce(() => {
    if (window.scrollY > 140) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }, 10), []); // Debounce scroll event

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={`${styles.CategoriesBar} ${isSticky ? styles.sticky : ''} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.CategoriesBarContentBox}>
        <span className={styles.CategoriesBarTitle}>All Categories</span>
        <div className={styles.CategoriesList}>
          {categories.map((category, key) => (
            <Link className={styles.CategoryItem} href={category.CategoryPath} key={key}>
              {category.title}
            </Link>
          ))}
        </div>
        <div className={styles.Separator}></div>
        <div className={styles.CategoriesBarNavMenu}>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesBar;