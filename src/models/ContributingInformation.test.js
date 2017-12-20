// @flow
import ContributingInformation from "./ContributingInformation";

describe('ContributingInformation', () => {
  let subject;

  beforeEach(() => {
    subject = new ContributingInformation({name: 'README', content: 'IyB0aGlzIGlzIGEgdGVzdA=='});
  });

  describe('constructor', () => {
    it('creates a new ContributingInformation object', () => {
      subject = new ContributingInformation({name: 'TEST', htmlUrl: 'https://test.com', content: 'IyB0aGlzIGlzIGEgdGVzdA=='});
      expect(subject.name).toEqual('TEST');
      expect(subject.htmlUrl).toEqual('https://test.com');
      expect(subject.content).toEqual('IyB0aGlzIGlzIGEgdGVzdA==');
    });
  });

  describe('create', () => {
    it('returns a new ContributingInformation', () => {
      const subject = ContributingInformation.create({name: 'TEST', htmlUrl: 'https://test.com', content: 'IyB0aGlzIGlzIGEgdGVzdA=='})
      expect(subject instanceof ContributingInformation).toBeTruthy();
    });
  });

  describe('update', () => {

  });

  describe('decodedContent', () => {
    it('converts base64 encoding to utf8', () => {
      expect(subject.decodedContent()).toEqual('# this is a test');
    });
  });

  describe('markdownContent', () => {
    it('converts content to markdown', () => {
      const markdown = subject.markdownContent();
      expect(markdown).toInclude("<h1>this is a test</h1>");
      expect(markdown).toInclude("<p><strong>Read the full guide <a href=\"undefined\">here</a>.</strong></p>")
    })
  });
});
