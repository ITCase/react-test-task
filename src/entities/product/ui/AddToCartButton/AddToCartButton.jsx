import React, { useMemo } from 'react';
import { useLocalStorage } from '../../../../shared/hooks';
import styles from './styles.module.css';

const CartButton = React.memo((props) => {
  const { currentColor, currentSize, productName } = props;
  const [cart, setCart] = useLocalStorage('cart', []);

  function updateCart() {
    setCart((prev) => {
      if (isExistsInCart)
        return prev.filter(
          ({ name, size }) =>
            !(name === currentColor.name && size === currentSize),
        );

      console.log({
        productName,
        size: currentSize,
        name: currentColor.name,
        price: currentColor.price,
        image: currentColor.images[0],
      })  
      return prev.concat({
        productName,
        size: currentSize,
        name: currentColor.name,
        price: currentColor.price,
        image: currentColor.images[0],
      });
    });
  }

  const isExistsInCart = useMemo(
    () =>
      cart.some(
        ({ name, size }) => name === currentColor.name && size === currentSize,
      ),
    [cart, currentColor, currentSize],
  );

  return (
    <button onClick={updateCart} className={styles['add-cart-button']}>
      {isExistsInCart ? 'Удалить из корзины' : 'Добавить в корзину'}
    </button>
  );
});

export default CartButton;
