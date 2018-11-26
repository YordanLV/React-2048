import {combineReducers} from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';

import counterApp from './counterApp';

const rootReducer = combineReducers({
  counterApp,
  form: reduxFormReducer
});

export default rootReducer;