import React from "react";
import styles from "./Mens.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import IconCart from "../IconCart";
import { dataWomens } from "../../data/data";
import Cart from "../Cart";

const WomensComponent = () => {
  const { route } = useRouter();
  const { products } = dataWomens;

  return (
    <>
      <Head>
        <title>MyShop - Womens</title>
      </Head>
      <div className={styles.main}>
        <div className={styles.header_page}>
          <h1 className={styles.title_page}>Womens</h1>
          <p className={styles.bread_crumb}>
            <Link href="/">Home</Link>
            {" > "}
            <span>{`${route.replace("/", "")}`}</span>
          </p>
          <IconCart />
        </div>

        <section className={styles.grid_products}>
          {products &&
            products.map((product) => (
              <Link href={`/all-womens/${product.slug}`} key={product.id}>
                <a>
                  <div className={styles.product}>
                    <span className={styles.new}>New</span>
                    <div>
                      <img src={product.image} alt="" />
                    </div>
                    <div className={styles.name_and_price}>
                      <h2>{product.name}</h2>
                      <span>${product.price.toFixed(2)}</span>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
        </section>
        <Cart />
      </div>
    </>
  );
};

export default WomensComponent;
