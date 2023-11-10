/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';

import exampleReducer from './example/reducer';

export default combineReducers({
  example: exampleReducer,
});
