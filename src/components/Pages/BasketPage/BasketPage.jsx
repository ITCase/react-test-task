import { useStore } from '../../../store/BasketStore';
import { observer } from 'mobx-react';
import classes from './Basket.module.css';

export const BasketPage = observer(() => {
  const { store } = useStore();
  if (store.basket.length === 0) {
    return <div className={classes.emptyCart}>Корзина пуста...</div>;
  }
  return (
    <div className={classes.cart}>
      {store.basket.map(({ color, image, size, product, price }, index) => (
        <div key={index}>
          <img className={classes.image} src={image} alt="Картинка товара" />
          <h4>{product}</h4>
          <p>Цвет: {color}</p>
          <p>Размер: {size}</p>
          <p>Цена: {price}</p>
          <button onClick={() => store.removeProductFromBasket(index)}>
            Удалить из корзины
          </button>
        </div>
      ))}
    </div>
  );
});
