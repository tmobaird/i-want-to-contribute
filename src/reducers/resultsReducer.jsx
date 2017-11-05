import initialState from './initialState';
import objectAssign from 'object-assign';
import Repo from "../models/Repo";

export default function resultsReducer(state = initialState.results, action) {
  switch (action.type) {
    case "RESULT_CONTRIBUTING_UPDATE":
      const updated = objectAssign({}, state.data, {[action.id]: result(state.data[action.id], action)});
      return objectAssign({}, state, {data: updated});
    case "RESULT_FETCHING_ADDITIONAL_INFO_UPDATE":
    case "RESULT_OPEN_ISSUES_UPDATE":
    case "RESULT_SUGGESTED_ISSUES_UPDATE":
      const updatedData = objectAssign({}, state.data, {[action.id]: result(state.data[action.id], action)});
      return objectAssign({}, state, {data: updatedData});
    case "RESULTS_DATA_UPDATE":
      return objectAssign({}, state, {data: action.payload.results, sortedIds: action.payload.sortedIds});
    case "FETCHING_UPDATE":
      return objectAssign({}, state, {fetching: action.payload});
    default:
      return state;
  }
}

function result(state, action) {
  let props, issues;

  switch(action.type) {
    case "RESULT_CONTRIBUTING_UPDATE":
      console.log('updating contributing');
      return action.payload;
    case "RESULT_OPEN_ISSUES_UPDATE":
      issues = Object.assign({}, state.additionalInformation, { openIssues: action.payload });
      props = Object.assign({}, state, { additionalInformation: issues });
      return new Repo(props);
    case "RESULT_SUGGESTED_ISSUES_UPDATE":
      console.log('updating suggested');
      issues = Object.assign({}, state.additionalInformation, { suggestedIssues: action.payload });
      props = Object.assign({}, state, { additionalInformation: issues });
      return new Repo(props);
      // return objectAssign({}, state, { additionalInformation: additionalInformation(state.additionalInformation, action) });
    case "RESULT_FETCHING_ADDITIONAL_INFO_UPDATE":
      props = Object.assign({}, state, {fetchingAdditional: action.payload});
      return new Repo(props);
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
