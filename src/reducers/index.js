import {combineReducers} from 'redux'

import counterApp from './counterApp';
import board from './board';
import score from './score';

const rootReducer = combineReducers({
  board,
  score
});

export default rootReducer;