// @flow
import Issue from "./Issue";
import ContributingInformation from "./ContributingInformation";

type AdditionalInformationAttributes = {
  openIssues: Array<Issue>,
  suggestedIssues: Array<Issue>,
  contributingInformation: ContributingInformation
}

export default class AdditionalInformation {
  openIssues: Issue[];
  suggestedIssues: Issue[];
  contributingInformation: ContributingInformation;

  constructor(data: AdditionalInformationAttributes) {
    Object.assign(this, data);
  }

  static create(data: $Shape<AdditionalInformationAttributes>): AdditionalInformation {
    return new AdditionalInformation(data);
  }

  updateAndClone(data: $Shape<AdditionalInformationAttributes>): AdditionalInformation {
    const params = Object.assign({}, this.properties(), data);
    return AdditionalInformation.create(params);
  }

  determineSuggestedIssues(issues: Array<Issue>): void {
    this.suggestedIssues = [];
  }

  properties(): AdditionalInformationAttributes {
    const { determineSuggestedIssues, updateAndClone, ...rest } =  this;
    return rest;
  }
}
