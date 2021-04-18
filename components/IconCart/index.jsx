import React from "react";
import styles from "./IconCart.module.css";
import { GlobalContext } from "../../context/createContext";

const IconCart = () => {
  const { cart, setCart, isCartActive, setIsCarActive } = React.useContext(
    GlobalContext
  );

  return (
    <>
      <div
        className={styles.cart_icon_wrapper}
        onClick={() => setIsCarActive(!isCartActive)}
      >
        <div className={styles.wrapper_cart}>
          <img src="/cart.png" alt="" className={styles.image_cart} />
          <span className={cart.length && styles.items_cart}></span>
        </div>
        <div className={styles.cart_quantity}>
          <p>Cart {`[ ${cart.length} ]`}</p>
        </div>
      </div>
    </>
  );
};

export default IconCart;
