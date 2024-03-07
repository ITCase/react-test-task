import React, { useCallback, useEffect, useState } from 'react';
import { withLoading } from '../../../../shared/hocs';
import styles from './styles.module.css';
import { ColorsChips, AddToCartButton } from '../../../../entities/product/ui';

const ProductView = ({ product }) => {
  const { name, colors } = product;
  const [activeColor, setActiveColor] = useState(colors[0] ?? null);
  const { name: title, images, price, sizes, description } = activeColor;
  const [currentSize, setCurrentSize] = useState(
    sizes?.length ? sizes[0] : null,
  );

  const updateColor = useCallback(
    (index) => {
      setActiveColor(colors.find(({ id }) => index === id));
    },
    [colors],
  );

  useEffect(() => {
    setCurrentSize(activeColor.sizes?.length ? activeColor.sizes[0] : null);
  }, [activeColor]);

  useEffect(() => {
    console.log(currentSize);
  }, [currentSize]);

  return (
    <div className={styles.product}>
      <h2>
        {name} ({title})
      </h2>
      <div className={styles['product-content']}>
        <div className={styles['product__image']}>
          <img src={activeColor.images[0]} />
        </div>
        <div className={styles['product-info']}>
          <p className={styles['product__description']}>{description}</p>
          <p className={styles['product__price']}>$ {price}</p>
          <ColorsChips
            colors={colors}
            updateColor={updateColor}
            activeColorId={activeColor.id}
          />
          {/* TODO: Вынести всю логику размеров в отдельную компоненту */}
          <select
            value={currentSize ?? undefined}
            disabled={!sizes.length}
            onChange={(e) => setCurrentSize(e.target.value)}
          >
            {sizes.map((size) => (
              <option value={size} key={size}>
                {size}
              </option>
            ))}
          </select>

          <AddToCartButton
            productName={name}
            currentSize={currentSize}
            currentColor={activeColor}
          />
        </div>
      </div>
    </div>
  );
};

export default withLoading(ProductView);
