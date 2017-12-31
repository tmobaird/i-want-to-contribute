// @flow
import AdditionalInformation from './AdditionalInformation';
import {License} from '../serializers/RepoSerializer';

type RepoAttributes = {
  contributorsUrl: string,
  createdAt: string,
  description: string,
  fetchingAdditional: boolean,
  forks: number,
  forksCount: number,
  forksUrl: string,
  fullName: string,
  gitUrl: string,
  hasIssues: boolean,
  hasPages: boolean,
  homepage: string,
  htmlUrl: string,
  id: number,
  issuesUrl: string,
  language: string,
  license: License,
  name: string,
  openIssues: number,
  openIssuesCount: number,
  score: number,
  sshUrl: string,
  stargazersCount: number,
  updatedAt: string,
  url: string,
  watchers: number,
  watchersCount: number,
  additionalInformation: AdditionalInformation,
}

export default class Repo {
  additionalInformation: AdditionalInformation = AdditionalInformation.empty();
  contributorsUrl: string;
  createdAt: string;
  description: string;
  fetchingAdditional: boolean = false;
  forks: number;
  forksCount: number;
  forksUrl: string;
  fullName: string;
  gitUrl: string;
  hasIssues: boolean;
  hasPages: boolean;
  homepage: string;
  htmlUrl: string;
  id: number;
  issuesUrl: string;
  language: string;
  license: License;
  name: string;
  openIssues: number;
  openIssuesCount: number;
  score: number;
  sshUrl: string;
  stargazersCount: number;
  updatedAt: string;
  url: string;
  watchers: number;
  watchersCount: number;

  constructor(data: $Shape<RepoAttributes>) {
    Object.assign(this, data);
  }

  static create(data: $Shape<RepoAttributes>): Repo {
    return new Repo(data);
  }

  updateAndClone(data: $Shape<RepoAttributes>): Repo {
    const params = Object.assign({}, this.properties(), data);
    return Repo.create(params);
  }

  properties(): RepoAttributes {
    const { updateAndClone, properties, ...rest } = this;
    return rest;
  }
}
