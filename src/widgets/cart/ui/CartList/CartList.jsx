import React from 'react';
import styles from './styles.module.css';
import { useFetch } from '../../../../shared/hooks';
import { getSizes } from '../../../../services/api';
import { Image } from '../../../../shared/components';

const CartList = (props) => {
  const { cart, setCart } = props;
  const { data } = useFetch(getSizes);

  function deleteProduct(index) {
    setCart((prev) => prev.filter((_, id) => id !== index));
  }

  return (
    <div className={styles['cart-list']}>
      {/* TODO: Вынести товар в корзине в отдельную компоненту */}
      {cart.map(({ name, image, productName, size, price }, index) => (
        <div key={`${name}${productName}`} className={styles['cart-item']}>
          <h6>
            {productName} ({name})
          </h6>
          <Image image={image} />
          <p>
            {data?.find((item) => item.id == size)?.number || 'Без размера'}
          </p>
          <p className={styles['cart-item__price']}>$ {price}</p>
          <button
            className={styles['cart-item__delete']}
            onClick={() => deleteProduct(index)}
          >
            Удалить
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartList;
