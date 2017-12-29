// @flow
import type {UnserializedRepoAttributes} from "../../../serializers/RepoSerializer";

export default class RawRepoFactory {
  constructor(params: any) {
    return Object.assign(this, params);
  }

  static create(attributes: $Shape<UnserializedRepoAttributes>) {
    return new RawRepoFactory(attributes);
  }
}
