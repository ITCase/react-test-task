import classes from '../ProductPage.module.css';
import { Image } from '../Image';
import { memo } from 'react';

export const Card = memo(
  ({
    card,
    color,
    currentSizeSelected,
    clickColorHandler,
    setCurrentSizeSelected,
    sizes,
    addToBasketHandler,
  }) => {
    return (
      <div>
        <h1>{card.name}</h1>
        <div className={classes.card}>
          <h3>Цвет</h3>

          {card.colors.map((color) => (
            <button
              key={color.id}
              onClick={() => clickColorHandler(color.id)}
              className={classes.button}
            >
              {color.name}
            </button>
          ))}
          <div className={classes.description}>
            <p>Цвет: {color.name}</p>
            <p>{color.description}</p>
            <p>Цена: {color.price}</p>
            <Image color={color} />
            <div>
              {sizes.map((elem) => (
                <button
                  key={elem.id}
                  className={
                    elem.id === currentSizeSelected ? classes.active : null
                  }
                  onClick={() => setCurrentSizeSelected(elem.id)}
                  disabled={!color.sizes.includes(elem.id)}
                >
                  {elem.label} {elem.number}
                </button>
              ))}
            </div>
          </div>
        </div>
        <button
          className={classes.basketButton}
          onClick={() => addToBasketHandler()}
        >
          Добавить в корзину
        </button>
      </div>
    );
  },
);
