import { handleActions } from 'redux-actions';

const INITIAL_STATE = {
  dragging: false,
  positions: {},
  text: '',
};

export const DRAG_START = 'selected/DRAG_START';
export const DRAG_OVER_CHARACTER = 'selected/DRAG_OVER_CHARACTER';
export const DRAG_STOP = 'selected/DRAG_STOP';
export const RESET = 'selected/RESET';

export const dragStart = (row, column, character) => ({
  type: DRAG_START,
  row,
  column,
  character,
});

export const dragSelect = (row, column, character) => ({
  type: DRAG_OVER_CHARACTER,
  row,
  column,
  character,
});

export const dragStop = () => ({
  type: DRAG_STOP,
});

export const reset = () => ({
  type: RESET,
});

export default handleActions({
  [DRAG_START]: (state, { row, column, character }) => ({
    ...state,
    dragging: true,
    positions: {
      [[row, column]]: true,
    },
    text: character,
  }),
  [DRAG_OVER_CHARACTER]: (state, { row, column, character }) => ({
    ...state,
    positions: {
      ...state.positions,
      [[row, column]]: true,
    },
    text: `${state.text}${character}`,
  }),
  [DRAG_STOP]: state => ({
    ...state,
    dragging: false,
  }),
  [RESET]: () => INITIAL_STATE,
}, INITIAL_STATE);
