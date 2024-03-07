import classes from './ProductPage.module.css';
import { useState } from 'react';

export const Image = ({ color }) => {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <div>
      <div>
        <img className={classes.image} src={color.images[currentImg]} alt="" />
      </div>
      <button
        onClick={() => setCurrentImg((prevValue) => prevValue - 1)}
        disabled={currentImg === 0}
      >
        {'<'}
      </button>
      <button
        onClick={() => setCurrentImg((prevValue) => prevValue + 1)}
        disabled={currentImg + 1 >= color.images.length}
      >
        {'>'}
      </button>
    </div>
  );
};
