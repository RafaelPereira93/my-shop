const removeDuplicateItensInArray = (array, id) => {
  const unique = array
    .map((e) => e.id) // Armazenar apenas os ids dos produtos em um array
    .map((e, i, final) => final.indexOf(e) === i && i) // Armazenar os index dos objetos únicos
    .filter((e) => array[e]) // Eliminar os falsos index's e retornar objetos únicos
    .map((e) => array[e]);
  return unique;
};

export const addQuantityProduct = (product, allProducts, setCart) => {
  const modifiedArray = allProducts.map(({ id }) => {
    if (product.id === id) {
      const newArray = [
        ...allProducts,
        { ...product, quantity: product.quantity++ },
      ];
      return removeDuplicateItensInArray(newArray, product.id);
    }
  });

  const finalArray = modifiedArray.filter((arr) => arr);
  return finalArray[0];
};

export const removeQuantityProduct = (product, allProducts, setCart) => {
  const modifiedArray = allProducts.map(({ id }) => {
    if (product.id === id) {
      const newArray = [
        ...allProducts,
        { ...product, quantity: product.quantity-- },
      ];
      return removeDuplicateItensInArray(newArray, product.id);
    }
  });

  const finalArray = modifiedArray.filter((arr) => arr);
  return finalArray[0];
};
