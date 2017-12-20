// @flow
import AdditionalInformation from "./AdditionalInformation";
import Issue from "./Issue";
import ContributingInformation from "./ContributingInformation";

describe('AdditionalInformation', () => {
  describe('create', () => {
    it('creates new AdditionalInformation', () => {
      const subject = AdditionalInformation.create({openIssues: []});
      expect(subject instanceof AdditionalInformation).toBeTruthy();
    });
    it('creates new AdditionalInformation with properties', () => {
      const contributing = ContributingInformation.create({});
      const subject = AdditionalInformation.create({
        openIssues: [],
        suggestedIssues: [],
        contributingInformation: contributing
      });

      expect(subject.openIssues).toEqual([]);
      expect(subject.suggestedIssues).toEqual([]);
      expect(subject.contributingInformation).toBe(contributing);
    });
  });
  describe('updateAndClone', () => {
    it('returns a new AdditionalInformation with updated properties', () => {
      const initial = AdditionalInformation.create({openIssues: [], suggestedIssues: []});

      const issue = Issue.create({title: 'Open Issue'});
      const subject = initial.updateAndClone({openIssues: [issue]});

      expect(subject instanceof AdditionalInformation).toBeTruthy();
      expect(subject).not.toBe(initial);
      expect(subject.openIssues).toEqual([issue]);
      expect(subject.suggestedIssues).toEqual([]);
    });
  });
});