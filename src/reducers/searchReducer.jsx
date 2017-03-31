import initialState from './initialState';
import objectAssign from 'object-assign';

export default function searchReducer(state = initialState.search, action) {
  let newState;

  switch (action.type) {
    case "SUBMITTED_UPDATE":
      return objectAssign({}, state, {submitted: action.payload});
    case "SUBMITTED_SEARCH_TERM_UPDATE":
      return objectAssign({}, state, {submittedSearchTerm: action.payload});
    default:
      return state;
  }
}
