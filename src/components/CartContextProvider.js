import React, {useCallback, useState} from 'react'

const Context = React.createContext(null);

export const useCreateCartContext = function () {
  const [productsInCart, setProductsInCart] = useState([])

  const addProduct = useCallback((newProduct) => {
    console.log(newProduct)
    setProductsInCart(products => [...products, newProduct])
  });

  const deleteProduct = useCallback((productId) => {
    setProductsInCart(products => {
      const index = products.findIndex(product => product.id === productId)

      if (index === -1) {
        return products
      }

      return [...products.slice(0, index), ...products.slice(index + 1)]
    })
  })

  return {productsInCart, addProduct, deleteProduct}
}

export const CartContextProvider = ({ children }) => {
  const context = useCreateCartContext();
  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export function useAppContext() {
  const context = React.useContext(Context);
  if (!context) throw new Error('Use app context within provider!');
  return context;
}