import React from 'react';
import { withLoading } from '../../../../shared/hocs';
import GoodCard from '../../../../entities/catalog/GoodCard/GoodCard';
import styles from './styles.module.css'

const GoodsList = React.memo(({ goods }) => {

  return (
    <div className={styles['goods-list']}>
      {goods.map((good) => (
        <GoodCard good={good} key={good.id} />
      ))}
    </div>
  );
});

export default withLoading(GoodsList);
