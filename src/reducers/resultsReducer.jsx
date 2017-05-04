import initialState from './initialState';
import objectAssign from 'object-assign';

export default function resultsReducer(state = initialState.results, action) {
  switch (action.type) {
    case "RESULT_CONTRIBUTING_UPDATE":
    case "RESULT_FETCHING_ADDITIONAL_INFO_UPDATE":
    case "RESULT_OPEN_ISSUES_UPDATE":
    case "RESULT_SUGGESTED_ISSUES_UPDATE":
      const updatedData = objectAssign({}, state.data, {[action.id]: result(state.data[action.id], action)});
      return objectAssign({}, state, {data: updatedData});
    case "RESULTS_DATA_UPDATE":
      return objectAssign({}, state, {data: action.payload});
    case "FETCHING_UPDATE":
      return objectAssign({}, state, {fetching: action.payload});
    default:
      return state;
  }
}

function result(state, action) {
  switch(action.type) {
    case "RESULT_CONTRIBUTING_UPDATE":
    case "RESULT_OPEN_ISSUES_UPDATE":
    case "RESULT_SUGGESTED_ISSUES_UPDATE":
      return objectAssign({}, state, { additionalInformation: additionalInformation(state.additionalInformation, action) });
    case "RESULT_FETCHING_ADDITIONAL_INFO_UPDATE":
      return objectAssign({}, state, { fetchingAdditional: action.payload });
    default:
      return state;
  }
}

function additionalInformation(state={}, action) {
  switch(action.type) {
    case "RESULT_CONTRIBUTING_UPDATE":
      return objectAssign({}, state, { contributing: action.payload });
    case "RESULT_OPEN_ISSUES_UPDATE":
      return objectAssign({}, state, { openIssues: action.payload });
    case "RESULT_SUGGESTED_ISSUES_UPDATE":
      return objectAssign({}, state, { suggestedIssues: action.payload });
    default:
      return state;
  }
}
