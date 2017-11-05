// @flow
import AdditionalInformation from './AdditionalInformation';
import {License} from '../serializers/RepoSerializer';
import ContributingInformation from "./ContributingInformation";

interface RepoAttributes {
  contributorsUrl: string;
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
}

export default class Repo {
  contributorsUrl: string;
  contributingInformation: ContributingInformation | null;
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
  additionalInformation: AdditionalInformation | null;

  constructor(data: RepoAttributes) {
    Object.assign(this, data)
  }
}
