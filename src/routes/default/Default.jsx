import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import data from '../../data';
import {
  dragStart,
  dragSelect,
  dragStop,
} from '../../state/selected';
import styles from './Default.pcss';

const Default = ({ dispatch, history, dragging, positions, text }) => (
  <div className={styles.root}>
    {data.map((row, i) => (
      <div
        key={i}
        className={styles.row}
      >
        {row.map((col, j) => (
          <div
            key={j}
            className={cx(styles.col, { [styles.col_highlighted]: positions[`${i},${j}`] })}
            onMouseDown={() => dispatch(dragStart(i, j, col))}
            onMouseEnter={() => dragging && dispatch(dragSelect(i, j, col))}
            onMouseUp={() => dragging && (dispatch(dragStop()) && history.push(`/${text}`))}
          >
            {col}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default connect(state => ({
  ...state.selected,
}))(Default);
