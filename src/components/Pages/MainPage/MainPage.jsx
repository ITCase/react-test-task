import classes from './MainPage.module.css';
import { getProducts } from '../../../services/api';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export const MainPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);
  return (
    <div>
      <h1>Product List</h1>
      <div className={classes.cards}>
        {products.map((product) => (
          <NavLink key={product.id} to={`/product/${product.id}`}>
            <div className={classes.card}>
              <p>{product.name}</p>
              <div>
                <img
                  alt={product.name}
                  className={classes.image}
                  src={product.colors[0].images[0]}
                />
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
