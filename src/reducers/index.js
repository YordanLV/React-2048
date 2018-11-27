import {combineReducers} from 'redux'

import counterApp from './counterApp';
import board from './board';

const rootReducer = combineReducers({
  board
});

export default rootReducer;