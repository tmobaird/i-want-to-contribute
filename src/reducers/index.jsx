import { combineReducers } from 'redux';
import search from './searchReducer';
import results from './resultsReducer';

const rootReducer = combineReducers({
  search,
  results,
});

export default rootReducer;
