export const getProduct = (products, currentProduct) => {
  const filteredProducts = products.filter(
    ({ slug }) => slug === currentProduct.slug
  );
  return filteredProducts;
};
