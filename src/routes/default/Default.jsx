import React from 'react';
import data from '../../data';
import styles from './Default.pcss';

export default () => (
  <div className={styles.root}>
    {data.map((row, i) => (
      <div
        key={i}
        className={styles.row}
      >
        {row.map((col, j) => (
          <div
            key={j}
            className={[styles.col, styles.col_fitVertical].join(' ')}
          >
            {col}
          </div>
        ))}
      </div>
    ))}
  </div>
);
