// @flow
interface IssueProperties {
  title: string
}

export default class Issue {
  title: string;

  constructor(properties: IssueProperties) {
    Object.assign(this, properties);
  }
}
