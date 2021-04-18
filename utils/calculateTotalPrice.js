export const calculateTotalPrice = (allProducts) => {
  const total = allProducts.reduce(
    (acc, product) => (acc += product.quantity * product.price),
    0
  );
  return total;
};
