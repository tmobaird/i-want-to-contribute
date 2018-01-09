import AdditionalInformation from "../models/AdditionalInformation";

export function additionalInformation(state: AdditionalInformation, action: Object) {
  switch (action.type) {
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