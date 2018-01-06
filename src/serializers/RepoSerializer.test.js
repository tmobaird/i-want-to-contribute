import RepoSerializer from './RepoSerializer';

const serializedFull = {
  contributors_url: 'https://contributing.com',
  created_at: '01/01/2001',
  description: 'This is a test description',
  forks: 1,
  forks_count: 1,
  forks_url: 'https://forks.com',
  full_name: 'owner/reponame',
  git_url: 'https://giturl.com',
  has_issues: true,
  has_pages: true,
  homepage: 'https://homepage.com',
  html_url: 'https://html.com',
  id: 1,
  issues_url: 'https://issues.com',
  language: 'JavaScript',
  license: {},
  name: 'reponame',
  open_issues: 2,
  open_issues_count: 2,
  score: 20,
  ssh_url: 'git@github.com',
  stargazers_count: 3,
  updated_at: '02/02/2002',
  url: 'https://repourl.com',
  watchers: 4,
  watchers_count: 4
}

const deserializedFull = {
  contributorsUrl: 'https://contributing.com',
  createdAt: '01/01/2001',
  description: 'This is a test description',
  forks: 1,
  forksCount: 1,
  forksUrl: 'https://forks.com',
  fullName: 'owner/reponame',
  gitUrl: 'https://giturl.com',
  hasIssues: true,
  hasPages: true,
  homepage: 'https://homepage.com',
  htmlUrl: 'https://html.com',
  id: 1,
  issuesUrl: 'https://issues.com',
  language: 'JavaScript',
  license: {},
  name: 'reponame',
  openIssues: 2,
  openIssuesCount: 2,
  score: 20,
  sshUrl: 'git@github.com',
  stargazersCount: 3,
  updatedAt: '02/02/2002',
  url: 'https://repourl.com',
  watchers: 4,
  watchersCount: 4
}

describe('RepoSerializer', () => {
  it('is new-able', () => {
    const subject = new RepoSerializer();
  });
  
  it('converts all keys from snake_case to camelCase', () => {
    const attributes = {
      contributors_url: 'testurl',
      created_at: 'date',
      forks_count: '12',
      forks_url: 'test url',
      git_url: 'test url two'
    }

    const result = RepoSerializer.deserialize(attributes);
    Object.keys(attributes).forEach(k => {
      expect(attributes[k]).not.toContain('_')
    });
  });

  it('returns proper deserialized attributes', () => {
    const result = RepoSerializer.deserialize(serializedFull);
    expect(result).toEqual(deserializedFull);
  })
});
