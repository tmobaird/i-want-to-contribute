// @flow
import Issue from "./Issue";

describe('Issue', () => {
  describe('constructor', () => {
    it('creates a new Issue with properties', () => {
      const subject = new Issue({title: 'Test Issue'});
      expect(subject.title).toEqual('Test Issue');
    });
  });

  describe('create', () => {
    it('creates a new Issue with properties', () => {
      const subject = Issue.create({title: 'Test Issue'});
      expect(subject.title).toEqual('Test Issue');
      expect(subject instanceof Issue).toBeTruthy();
    });
  });
});
