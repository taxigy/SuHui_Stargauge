import {
  createStore,
  combineReducers,
} from 'redux';
import selected from './selected';

export default createStore(combineReducers({
  selected,
}));
