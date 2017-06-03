import initialState from './initialState';

export default function searchReducer(state = initialState.search, action) {
  switch (action.type) {
    case "SUBMITTED_UPDATE":
      return {...state, submitted: action.payload};
    case "SUBMITTED_SEARCH_TERM_UPDATE":
      return {...state, submittedSearchTerm: action.payload};
    case "RESET_SEARCH":
      return {...initialState.search};
    default:
      return state;
  }
}
