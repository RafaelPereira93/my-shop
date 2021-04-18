import React from "react";
import styles from "./HomePage.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.name_shop_and_image}>
        <h1>My Shop</h1>
        <img src="/shopping-bag.svg" alt="" />
      </div>
      <div className={styles.nav_genre}>
        <Link href="/all-mens">
          <a className={styles.link_genre}>Shop Men's</a>
        </Link>
        <Link href="/all-womens">
          <a className={styles.link_genre}>Shop Women's</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
