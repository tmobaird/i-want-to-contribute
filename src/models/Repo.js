// @flow
import AdditionalInformation from './AdditionalInformation';
import {License} from '../serializers/RepoSerializer';
import ContributingInformation from "./ContributingInformation";

type RepoAttributes = {
  contributorsUrl?: string,
  createdAt?: string,
  description?: string,
  forks?: number,
  forksCount?: number,
  forksUrl?: string,
  fullName?: string,
  gitUrl?: string,
  hasIssues?: boolean,
  hasPages?: boolean,
  homepage?: string,
  htmlUrl?: string,
  id?: number,
  issuesUrl?: string,
  language?: string,
  license?: License,
  name?: string,
  openIssues?: number,
  openIssuesCount?: number,
  score?: number,
  sshUrl?: string,
  stargazersCount?: number,
  updatedAt?: string,
  url?: string,
  watchers?: number,
  watchersCount?: number,
  additionalInformation?: AdditionalInformation,
  contributingInformation?: ContributingInformation
}

export default class Repo {
  additionalInformation: AdditionalInformation;
  contributorsUrl: string;
  contributingInformation: ContributingInformation;
  createdAt: string;
  description: string;
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

  constructor(data: RepoAttributes) {
    Object.assign(this, data);
  }

  static create(data: RepoAttributes): Repo {
    return new Repo(data);
  }

  update(data: RepoAttributes): Repo {
    const params = Object.assign({}, {...this}, data);
    return new Repo(params);
  }
}
