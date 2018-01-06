// @flow
export interface License {
  key: string,
  name: string,
  spdx_id: string,
  url: string
}

export interface UnserializedRepoAttributes {
  contributors_url: string;
  created_at: string;
  description: string;
  forks: number;
  forks_count: number;
  forks_url: string;
  full_name: string;
  git_url: string;
  has_issues: boolean;
  has_pages: boolean;
  homepage: string;
  html_url: string;
  id: number;
  issues_url: string;
  language: string;
  license: License | null;
  name: string;
  open_issues: number;
  open_issues_count: number;
  score: number;
  ssh_url: string;
  stargazers_count: number;
  updated_at: string;
  url: string;
  watchers: number;
  watchers_count: number;
}

export default class RepoSerializer {
  static deserialize(data: UnserializedRepoAttributes) {
    return {
      contributorsUrl: data.contributors_url,
      createdAt: data.created_at,
      description: data.description,
      forks: data.forks,
      forksCount: data.forks_count,
      forksUrl: data.forks_url,
      fullName: data.full_name,
      gitUrl: data.git_url,
      hasIssues: data.has_issues,
      hasPages: data.has_pages,
      homepage: data.homepage,
      htmlUrl: data.html_url,
      id: data.id,
      issuesUrl: data.issues_url,
      language: data.language,
      license: data.license || null,
      name: data.name,
      openIssues: data.open_issues,
      openIssuesCount: data.open_issues_count,
      score: data.score,
      sshUrl: data.ssh_url,
      stargazersCount: data.stargazers_count,
      updatedAt: data.updated_at,
      url: data.url,
      watchers: data.watchers,
      watchersCount: data.watchers_count
    }
  }
}
