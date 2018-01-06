// @flow
import Issue from "./Issue";
import ContributingInformation from "./ContributingInformation";

type EmptyAdditionalInformation = {}

type AdditionalInformationAttributes = {
  openIssues: Array<Issue>,
  suggestedIssues: Array<Issue>,
  contributingInformation: ContributingInformation
}

export default class AdditionalInformation {
  openIssues: Issue[];
  suggestedIssues: Issue[];
  contributingInformation: ContributingInformation;

  constructor(data: AdditionalInformationAttributes | EmptyAdditionalInformation) {
    Object.assign(this, data);
  }

  static create(data: $Shape<AdditionalInformationAttributes>): AdditionalInformation {
    return new AdditionalInformation(data);
  }

  static empty(): AdditionalInformation {
    return new AdditionalInformation({});
  }

  updateAndClone(data: $Shape<AdditionalInformationAttributes>): AdditionalInformation {
    const params = Object.assign({}, this.properties(), data);
    return AdditionalInformation.create(params);
  }

  determineSuggestedIssues(issues: Array<Issue>): void {
    this.suggestedIssues = [];
  }

  isEmpty(): boolean {
    return Object.keys(this).length === 0 && this.constructor === AdditionalInformation;
  }

  properties(): AdditionalInformationAttributes {
    const { determineSuggestedIssues, updateAndClone, isEmpty, ...rest } =  this;
    return rest;
  }
}
