import { combineReducers } from 'redux';
import search from './searchReducer';
import results from './resultsReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  search,
  results,
  routing: routerReducer
});

export default rootReducer;
