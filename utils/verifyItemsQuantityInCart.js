export const verifyItemsQuantityInCart = (quantity) =>
  quantity < 2
    ? `${quantity} item in your cart`
    : `${quantity} items in your cart`;
