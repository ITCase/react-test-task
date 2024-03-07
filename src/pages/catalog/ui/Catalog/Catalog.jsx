import React, {useEffect} from 'react';
import { getProducts } from '../../../../services/api';
import { useFetch } from '../../../../shared/hooks';
import styles from './styles.module.css';
import { GoodsList } from '../../../../widgets/catalog/ui';

const Catalog = () => {
  const { data, isLoading, error } = useFetch(getProducts);
  

  console.log(data);
  return (
    <div className={styles.catalog}>
      <h1>Product List</h1>
      <GoodsList goods={data} isLoading={isLoading} error={error} />

    </div>
  );
};

export default Catalog;
