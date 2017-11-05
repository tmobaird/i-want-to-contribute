// @flow
import Remarkable from 'remarkable';
import {Base64} from "js-base64";

interface ContributingInformationParams {
  name: string,
  htmlUrl: string,
  content: string
}

export default class ContributingInformation {
  name: string;
  htmlUrl: string;
  content: string;

  constructor(parameters: ContributingInformationParams): void {
    Object.assign(this, parameters)
  }

  decodedContent(): string {
    return Base64.decode(this.content)
  }

  markdownContent(): string {
    const md = new Remarkable();
    const shortText = this.decodedContent().substring(0,500);
    return md.render(shortText + `\n\n**Read the full guide [here](${this.htmlUrl}).**`);
  }
}
