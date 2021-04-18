import React from "react";
import styles from "./Cart.module.css";
import { GlobalContext } from "../../context/createContext";
import { filterCartToRemoveProduct } from "../../utils/filterCartToRemoveProduct";
import TotalCart from "../../components/TotalCart";
import ProductCart from "../ProductCart";
import { verifyItemsQuantityInCart } from "../../utils/verifyItemsQuantityInCart";

const Cart = () => {
  const { cart, setCart, isCartActive, setIsCarActive } = React.useContext(
    GlobalContext
  );

  const handleCart = (e) => {
    const existsDataset = e.target.dataset.js;

    if (existsDataset) {
      setIsCarActive(!isCartActive);
    }
  };

  const handleRemoveProduct = (e) => {
    const isClickedInButton = e.target.dataset.remove;

    if (isClickedInButton) {
      const convertIdToNumber = Number(isClickedInButton);
      const products = filterCartToRemoveProduct(convertIdToNumber, cart);
      setCart([...products]);
    }
  };

  return isCartActive ? (
    <>
      <main className={styles.main} onClick={handleCart}>
        <div className={styles.black_div} data-js="cart"></div>
        <div className={styles.cart_content}>
          <span data-js="cart" className={styles.close_cart}>
            <img src="/close.png" alt="" data-js="cart" />
          </span>
          <div className={styles.cart_items}>
            <h2>
              {cart.length === 0
                ? "Cart"
                : `${verifyItemsQuantityInCart(cart.length)}`}
            </h2>
            <p className={styles.empty_cart_message}>
              {cart.length === 0 &&
                "There are currently no items in your cart."}
            </p>
            {cart &&
              cart.map((product) => (
                <ProductCart
                  key={product.id}
                  product={product}
                  handleRemoveProduct={handleRemoveProduct}
                />
              ))}
          </div>
          {cart.length !== 0 && <TotalCart />}
        </div>
      </main>
    </>
  ) : (
    ""
  );
};

export default Cart;
