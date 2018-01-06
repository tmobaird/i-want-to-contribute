// @flow
import initialState from './initialState';
import objectAssign from 'object-assign';
import Repo from "../models/Repo";
import AdditionalInformation from "../models/AdditionalInformation";

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

export function repo(state: Repo, action: Object): Repo {
  switch(action.type) {
    case "RESULT_FETCHING_ADDITIONAL_UPDATE":
      return state.updateAndClone({ fetchingAdditional: action.payload });
    case "RESULT_CONTRIBUTING_UPDATE":
    case "RESULT_OPEN_ISSUES_UPDATE":
    case "RESULT_SUGGESTED_ISSUES_UPDATE":
      const additional = additionalInformation(state.additionalInformation, action);
      return state.updateAndClone({ additionalInformation: additional });
    default:
      return state;
  }
}

export function additionalInformation(state: AdditionalInformation, action: Object) {
  switch(action.type) {
    case "RESULT_CONTRIBUTING_UPDATE":
      return state.updateAndClone({contributingInformation: action.payload});
    case "RESULT_OPEN_ISSUES_UPDATE":
      return state.updateAndClone({openIssues: action.payload});
    case "RESULT_SUGGESTED_ISSUES_UPDATE":
      return state.updateAndClone({suggestedIssues: action.payload});
    default:
      return state;
  }
}
