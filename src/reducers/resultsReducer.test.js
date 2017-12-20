// @flow
import AdditionalInformation from "../models/AdditionalInformation";
import * as ResultsReducer from "./resultsReducer";
import Issue from "../models/Issue";
import ContributingInformation from "../models/ContributingInformation";
import Repo from "../models/Repo";

describe('resultsReducer', () => {
  describe('.result', () => {
    describe('when action type is RESULT_CONTRIBUTING_UPDATE', () => {
      it('updates repo with new additional information', () => {
        const initialAdditionalInformation = AdditionalInformation.create({
          openIssues: [],
          contributingInformation: ContributingInformation.create()
        });
        const initial = Repo.create({additionalInformation: initialAdditionalInformation});
        const action = {
          type: 'RESULT_CONTRIBUTING_UPDATE',
          payload: ContributingInformation.create({name: 'New Contributing', content: 'Updated'})
        };
        const subject = ResultsReducer.result(initial, action);

        expect(subject.additionalInformation instanceof AdditionalInformation).toBeTruthy();
        expect(subject.additionalInformation.contributingInformation).not.toBe(initialAdditionalInformation);
      });

      it('updates repo with new additional information properties', () => {
        expect(true).toBeFalsy();
      });
    });
  });

  describe('.additionalInformation', () => {
    describe('when action type is RESULT_CONTRIBUTING_UPDATE', () => {
      it('returns a new AdditionalInformation', () => {
        const contributing = ContributingInformation.create({name: 'CONTRIBUTING', content: 'Read here'});
        const initial = AdditionalInformation.create({contributingInformation: contributing});

        const action = {
          type: 'RESULT_CONTRIBUTING_UPDATE',
          payload: ContributingInformation.create({name: 'New Contributing', content: 'Updated'})
        };
        const subject = Results.additionalInformation(initial, action);

        expect(subject instanceof AdditionalInformation).toBeTruthy();
        expect(subject).not.toBe(initial);
      });

      it('returns additional information with updated contributing information', () => {
        const contributing = ContributingInformation.create({name: 'CONTRIBUTING', content: 'Read here'});
        const initial = AdditionalInformation.create({contributingInformation: contributing, openIssues: []});

        const action = {
          type: 'RESULT_CONTRIBUTING_UPDATE',
          payload: ContributingInformation.create({name: 'New Contributing', content: 'Updated'})
        };
        const subject = Results.additionalInformation(initial, action);

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

        const subject = Results.additionalInformation(initial, action);

        expect(subject instanceof AdditionalInformation).toBeTruthy();
        expect(subject).not.toBe(initial);
      });

        it('returns AdditionalInformation with updated open issues', () => {
          const additionalInformation = AdditionalInformation.create({openIssues: [], suggestedIssues: []});

          const subject = Results.additionalInformation(additionalInformation, action);

          expect(subject.openIssues.length).toEqual(1);
          expect(subject.openIssues[0].title).toEqual('OpenIssue');
          expect(subject.suggestedIssues).toEqual(additionalInformation.suggestedIssues);
        });
    });

    describe('when action type is RESULT_SUGGESTED_ISSUES_UPDATE', () => {
      const action = {
        type: 'RESULT_SUGGESTED_ISSUES_UPDATE',
        payload: [Issue.create({title: 'New Suggested Issue'})]
      };

      it('returns an instance of AdditionalInformation', () => {
        const initial = AdditionalInformation.create({openIssues: [], suggestedIssues: []});

        const subject = Results.additionalInformation(initial, action);

        expect(subject instanceof AdditionalInformation).toBeTruthy();
        expect(subject).not.toBe(initial);
      });

      it('returns additional information with updated suggested issues', () => {
        const additionalInformation = AdditionalInformation.create({openIssues: [], suggestedIssues: []});

        const subject = Results.additionalInformation(additionalInformation, action);

        expect(subject.suggestedIssues.length).toEqual(1);
        expect(subject.suggestedIssues[0].title).toEqual('New Suggested Issue');
        expect(subject.openIssues).toEqual(additionalInformation.openIssues);
      });
    });
  });
});