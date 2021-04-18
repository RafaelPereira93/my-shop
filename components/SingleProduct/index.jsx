import React from "react";
import styles from "./SingleProduct.module.css";
import Head from "next/head";
import IconCart from "../IconCart";
import { GlobalContext } from "../../context/createContext";
import { useRouter } from "next/router";
import { data, dataWomens } from "../../data/data";
import { getProduct } from "../../utils/getProduct";
import { activeSizeClasses } from "../../utils/activeSizeClasses";
import { showCartmessage } from "../../utils/showCartMessage";
import Link from "next/link";
import Cart from "../Cart";

const Product = () => {
  const { query, pathname } = useRouter();
  let products;
  const { cart, setCart } = React.useContext(GlobalContext);

  pathname.includes("all-womens")
    ? ({ products } = dataWomens)
    : ({ products } = data);

  const [product, setProduct] = React.useState([]);
  const [size, setSize] = React.useState("");
  const [cartMessage, setCartMessage] = React.useState("");

  React.useEffect(() => {
    const currentProduct = getProduct(products, query);
    setProduct(...currentProduct);
    return () => setProduct([]);
  }, [query]);

  const handleItemsCart = () => {
    const productId = product.id;

    const filteredCart = cart.filter(({ id }) => productId === id);

    if (filteredCart.length) {
      alert("O produto já está no carrinho");
    } else {
      setCart([...cart, { ...product, sizes: size, quantity: 1 }]);
      setCartMessage("Product added to cart");
      showCartmessage(setCartMessage);
    }
  };

  const changeSizes = (e) => {
    const isDatasetExists = e.target.dataset.js;

    if (isDatasetExists) {
      const currentSize = e.target.innerText;
      setSize(currentSize);
    }
  };

  return (
    <>
      <Head>
        <title>
          MyShop - {pathname.includes("all-womens") ? "Womens" : "Mens"}
        </title>
      </Head>
      <div className={styles.main}>
        <div className={styles.header_page}>
          <h1 className={styles.title_page}>
            {pathname.includes("all-womens") ? "Womens" : "Mens"}
          </h1>
          <p className={styles.bread_crumb}>
            <Link href="/">Home</Link>
            {" > "}
            <span>{product && product.name}</span>
          </p>
          <IconCart />
        </div>

        {product && (
          <div className={styles.box_product}>
            <div>
              <img src={product.image} alt="" />
            </div>
            <div className={styles.information_product}>
              <h2 className={styles.name_product}>{product.name}</h2>
              <p className={styles.price_product}>
                ${product.price && product.price.toFixed(2)}
              </p>
              <p className={styles.selected_size}>Size: {size}</p>
              <div className={styles.sizes} onClick={changeSizes}>
                {product.sizes &&
                  product.sizes.map((size) => (
                    <span
                      className={styles.size}
                      key={size}
                      onClick={activeSizeClasses}
                    >
                      {size}
                    </span>
                  ))}
              </div>
              <button className={styles.add_to_cart} onClick={handleItemsCart}>
                Add
                <div className={styles.cart_div}>
                  <img src="/cart.png" alt="" />
                </div>
              </button>

              {cartMessage && (
                <p className={styles.added_to_cart}>{cartMessage}</p>
              )}
            </div>
          </div>
        )}
      </div>
      <Cart />
    </>
  );
};

export default Product;
