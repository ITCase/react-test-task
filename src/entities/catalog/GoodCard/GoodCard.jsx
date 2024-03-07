import React from 'react';
import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';

const GoodCard = ({ good }) => {
  const { name, colors, id } = good;

  return (
    <NavLink to={`/product/${id}`} className={styles['good-card']}>
      <img src={colors[0].images[0]} height={300} className={styles['good__image']}/>
      {name && <span className={styles['good__name']}>{name}</span>}
    </NavLink>
  );
};

export default GoodCard;
