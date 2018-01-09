import ContributingInformation from "../models/ContributingInformation";
import AdditionalInformation from "../models/AdditionalInformation";
import {additionalInformation} from "./additionalInformationReducer";
import Issue from "../models/Issue";

describe('.additionalInformation', () => {
  describe('when action type is RESULT_CONTRIBUTING_UPDATE', () => {
    const action = {
      type: 'RESULT_CONTRIBUTING_UPDATE',
      payload: ContributingInformation.create({name: 'New Contributing', content: 'Updated'})
    };

    it('returns a new AdditionalInformation', () => {
      const contributing = ContributingInformation.create({name: 'CONTRIBUTING', content: 'Read here'});
      const initial = AdditionalInformation.create({contributingInformation: contributing});

      const subject = additionalInformation(initial, action);

      expect(subject).toBeInstanceOf(AdditionalInformation);
      expect(subject).not.toBe(initial);
    });

    it('returns additional information with updated contributing information', () => {
      const contributing = ContributingInformation.create({name: 'CONTRIBUTING', content: 'Read here'});
      const initial = AdditionalInformation.create({contributingInformation: contributing, openIssues: []});

      const subject = additionalInformation(initial, action);

      expect(subject.contributingInformation.name).toEqual('New Contributing');
      expect(subject.contributingInformation.content).toEqual('Updated');
      expect(subject.openIssues).toEqual([]);
    });
  });

  describe('when action type is RESULT_OPEN_ISSUES_UPDATE', () => {
    const action = {
      type: 'RESULT_OPEN_ISSUES_UPDATE',
      payload: [Issue.create({title: 'OpenIssue'})]
    };

    it('returns an instance of AdditionalInformation', () => {
      const initial = AdditionalInformation.create({openIssues: [], suggestedIssues: []});

      const subject = additionalInformation(initial, action);

      expect(subject).toBeInstanceOf(AdditionalInformation);
      expect(subject).not.toBe(initial);
    });

    it('returns AdditionalInformation with updated open issues', () => {
      const initial = AdditionalInformation.create({openIssues: [], suggestedIssues: []});

      const subject = additionalInformation(initial, action);

      expect(subject.openIssues.length).toEqual(1);
      expect(subject.openIssues[0].title).toEqual('OpenIssue');
      expect(subject.suggestedIssues).toEqual(initial.suggestedIssues);
    });
  });

  describe('when action type is RESULT_SUGGESTED_ISSUES_UPDATE', () => {
    const action = {
      type: 'RESULT_SUGGESTED_ISSUES_UPDATE',
      payload: [Issue.create({title: 'New Suggested Issue'})]
    };

    it('returns an instance of AdditionalInformation', () => {
      const initial = AdditionalInformation.create({openIssues: [], suggestedIssues: []});

      const subject = additionalInformation(initial, action);

      expect(subject).toBeInstanceOf(AdditionalInformation);
      expect(subject).not.toBe(initial);
    });

    it('returns additional information with updated suggested issues', () => {
      const initial = AdditionalInformation.create({openIssues: [], suggestedIssues: []});

      const subject = additionalInformation(initial, action);

      expect(subject.suggestedIssues.length).toEqual(1);
      expect(subject.suggestedIssues[0].title).toEqual('New Suggested Issue');
      expect(subject.openIssues).toEqual(initial.openIssues);
    });
  });
});
