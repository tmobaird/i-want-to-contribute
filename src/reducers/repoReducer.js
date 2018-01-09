import Repo from "../models/Repo";
import {additionalInformation} from "./additionalInformationReducer";

export function repo(state: Repo, action: Object): Repo {
  switch (action.type) {
    case "RESULT_FETCHING_ADDITIONAL_UPDATE":
      return state.updateAndClone({fetchingAdditional: action.payload});
    case "RESULT_CONTRIBUTING_UPDATE":
    case "RESULT_OPEN_ISSUES_UPDATE":
    case "RESULT_SUGGESTED_ISSUES_UPDATE":
      const additional = additionalInformation(state.additionalInformation, action);
      return state.updateAndClone({additionalInformation: additional});
    default:
      return state;
  }
}
