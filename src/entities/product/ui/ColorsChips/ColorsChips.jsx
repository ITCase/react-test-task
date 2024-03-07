import React from 'react';
import styles from './styles.module.css';
import { colorDictionary } from '../../../../shared/constants';
import classNames from 'classnames';

const ColorsChips = React.memo((props) => {
  const { colors, updateColor, activeColorId } = props;

  return (
    <div className={styles['colors-chips']}>
      {colors.map(({ id, name }) => (
        // TODO: вынести в отдельную компоненту
        <div
          className={classNames(styles['colors-chip'], {
            [styles.active]: id === activeColorId,
          })}
          key={id}
          onClick={() => updateColor(id)}
        >
          <div
            className={styles['colors-chip__splash']}
            style={{ backgroundColor: colorDictionary[name] }}
          />
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
});

export default ColorsChips;
