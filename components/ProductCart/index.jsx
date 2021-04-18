import React from "react";
import styles from "./ProductCart.module.css";
import { GlobalContext } from "../../context/createContext";
import {
  addQuantityProduct,
  removeQuantityProduct,
} from "../../utils/changeProductQuantity";

const ProductCart = ({ product, handleRemoveProduct }) => {
  const { cart, setCart } = React.useContext(GlobalContext);

  const handleDecrease = () => {
    if (product.quantity < 2) return;
    setCart(removeQuantityProduct(product, cart, setCart));
  };

  const handleIncrease = () => {
    setCart(addQuantityProduct(product, cart, setCart));
  };

  return (
    <>
      <div
        className={styles.product}
        key={product.id}
        onClick={handleRemoveProduct}
      >
        <div className={styles.name_and_image_product}>
          <div className={styles.image_product}>
            <img src={product.image} alt="" />
          </div>
          <div className={styles.name_and_sizes}>
            <div>
              <h3>{product.name}</h3>
              <span>Size: {product.sizes}</span>
            </div>
            <div className={styles.set_quantity}>
              <button onClick={handleDecrease}>-</button>
              <span>{product.quantity}</span>
              <button onClick={handleIncrease}>+</button>
            </div>
          </div>
        </div>
        <div className={styles.price_and_remove}>
          <p className={styles.price}>
            ${product.price && product.price * product.quantity}
          </p>
          <button className={styles.remove} data-remove={product.id}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
