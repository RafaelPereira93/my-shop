export const filterCartToRemoveProduct = (idProduct, cart) => {
  const productToRemove = cart.filter(({ id }) => idProduct !== id);
  return productToRemove;
};
