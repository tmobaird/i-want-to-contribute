class Repo {
  constructor(data) {
    this.contributorsUrl = data.contributors_url;
    this.createdAt = data.created_at;
    this.description = data.description;
    this.forks = data.forks;
    this.forksCount = data.forks_count;
    this.forksUrl = data.forks_url;
    this.fullName = data.full_name;
    this.git_Url = data.git_url;
    this.hasIssues = data.has_issues;
    this.hasPages = data.has_pages;
    this.homepage = data.homepage;
    this.htmlUrl = data.html_url;
    this.id = data.id;
    this.issuesUrl = data.issues_url;
    this.language = data.language;
    this.name = data.name;
    this.openIssues = data.open_issues;
    this.openIssuesCount = data.open_issues_count;
    this.stargazersCount = data.stargazers_count;
    this.updatedAt = data.updated_at;
    this.url = data.url;
    this.watchers = data.watchers;
    this.watchersCount = data.watchers_count;
  }
}

export default Repo;