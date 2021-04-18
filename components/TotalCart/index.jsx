import React from "react";
import styles from "./TotalCart.module.css";
import { GlobalContext } from "../../context/createContext";
import { calculateTotalPrice } from "../../utils/calculateTotalPrice";

const TotalCart = () => {
  const { cart, setCart } = React.useContext(GlobalContext);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const totalProducts = calculateTotalPrice(cart);
    setTotal(totalProducts);
  }, [cart]);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.value}>
          <p>Order Value</p>
          <p>${total && total.toFixed(2)}</p>
        </div>
        <div className={styles.delivery}>
          <p>Delivery</p>
          <p>Free</p>
        </div>
        <div className={styles.total}>
          <p>Total</p>
          <p>${total && total.toFixed(2)}</p>
        </div>
        <button className={styles.checkout}>Checkout</button>
        <button className={styles.continue_shopping}>Continue Shopping</button>
      </div>
    </>
  );
};

export default TotalCart;
