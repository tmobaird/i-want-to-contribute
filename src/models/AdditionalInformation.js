// @flow
import Issue from "./Issue";

interface AdditionalInformationAttributes {
   openIssues: Array<String>;
}

export default class AdditionalInformation {
  openIssues: Issue[];
  suggestedIssues: Issue[];

  constructor(data: AdditionalInformationAttributes) {
    this.determineSuggestedIssues(data.openIssues)
  }

  determineSuggestedIssues(issues: Array<String>) {
    this.suggestedIssues = [];
  }
}
