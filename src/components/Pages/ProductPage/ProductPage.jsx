import classes from './ProductPage.module.css';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct, getSizes } from '../../../services/api';
import { useStore } from '../../../store/BasketStore';
import { Card } from './Card';

export const ProductPage = () => {
  const { id } = useParams();
  const { store } = useStore();
  const [card, setCard] = useState(null);
  const [color, setColor] = useState(null);
  const [sizes, setSizes] = useState(null);
  const [currentSizeSelected, setCurrentSizeSelected] = useState(null);
  useEffect(() => {
    getProduct(id).then((res) => {
      setCard(res);
      setColor(res.colors[0]);
    });
    getSizes().then((res) => setSizes(res));
  }, []);
  const clickColorHandler = useCallback(
    (colorId) => {
      setCurrentSizeSelected(null);
      setColor(card.colors.find((color) => color.id === colorId));
    },
    [card],
  );
  const addToBasketHandler = useCallback(() => {
    if (color.sizes.length === 0) {
      alert('Товара нет в наличии');
      return;
    }
    if (!currentSizeSelected) {
      alert('Размер не выбран');
      return;
    }
    const size = sizes.find((size) => size.id === currentSizeSelected);
    if (size) {
      store.sendProductToBasket({
        product: card.name,
        price: color.price,
        color: color.name,
        size: size.label,
        image: color.images[0],
      });
    }
  }, [color, sizes, card, currentSizeSelected]);

  if (!color || !card || !sizes) {
    return <div>Loading...</div>;
  }
  return (
    <div className={classes.wrapper}>
      <Card
        card={card}
        currentSizeSelected={currentSizeSelected}
        setCurrentSizeSelected={setCurrentSizeSelected}
        clickColorHandler={clickColorHandler}
        color={color}
        sizes={sizes}
        addToBasketHandler={addToBasketHandler}
      />
    </div>
  );
};
