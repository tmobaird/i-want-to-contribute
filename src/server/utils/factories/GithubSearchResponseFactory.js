// @flow
import RawRepoFactory from "./RawRepoFactory";

export default class GithubSearchResponseFactory {
  constructor(params: any) {
    return Object.assign(this, params);
  }

  static format(body) {
    return {
      body: body
    };
  }

  static create(count: number = 5, repos: Array<any>) {
    if (repos) {
      return GithubSearchResponseFactory.format({results: repos});
    }

    const results = [];
    for(let i = 0; i < count; i++) {
      results.push(RawRepoFactory.create({id: i + 1}));
    }

    return GithubSearchResponseFactory.format({results});
  }
}
