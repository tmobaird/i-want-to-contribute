// @flow
import initialState from './initialState';
import objectAssign from 'object-assign';
import {repo} from "./repoReducer";

export default function results(state: any = initialState.results, action: Object) {
  switch (action.type) {
    case "RESULT_CONTRIBUTING_UPDATE":
    case "RESULT_FETCHING_ADDITIONAL_UPDATE":
    case "RESULT_OPEN_ISSUES_UPDATE":
    case "RESULT_SUGGESTED_ISSUES_UPDATE":
      const results = state.data;
      const updated = objectAssign({}, results, {[action.id]: repo(results[action.id], action)});
      return objectAssign({}, state, {data: updated});
    case "RESULTS_DATA_UPDATE":
      return objectAssign({}, state, {data: action.payload.results, sortedIds: action.payload.sortedIds});
    case "FETCHING_UPDATE":
      return objectAssign({}, state, {fetching: action.payload});
    default:
      return state;
  }
}
