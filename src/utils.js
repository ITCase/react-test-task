export const getActiveSizes = (sizes, availableSizesIds) => {
  return sizes.filter(size => availableSizesIds.indexOf(size.id) !== -1);
}

export const isProductInCart = (productsInCart, product, color, size) => {
  return productsInCart.findIndex(productInCart => productInCart.id === product.id &&
    productInCart.color.id === color.id &&
    productInCart.size.id === size.id) !== -1
}