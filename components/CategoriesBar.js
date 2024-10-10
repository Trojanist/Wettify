import React, { useState, useEffect } from "react";
import Link from "next/link";
import CategoriesJson from '../public/data/categories.json'
import styles from '../styles/CategoriesBar.module.css'

const CategoriesBar = ({ isVisible }) => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await Promise.resolve(CategoriesJson);
        setCategories(categories);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();

    const handleScroll = () => {
      if (window.scrollY > 140) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={`${styles.CategoriesBar} ${isSticky ? styles.sticky : ''} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.CategoriesBarContentBox}>
        <span className={styles.CategoriesBarTitle}>All Categories</span>
        <div className={styles.CategoriesList}>
          {categories.map((category, key) => (
            <Link className={styles.CategoryItem} href={category.CategoryPath} key={key}>{category.title}</Link>
          ))}
        </div>
        <div className={styles.Separator}></div>
        <div className={styles.CategoriesBarNavMenu}>
          <Link href="/contact">Contact</Link>
          {/* <Link href="/blog">Blog</Link> */}
          <Link href="/about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesBar;
