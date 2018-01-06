// @flow
import AdditionalInformation from "../models/AdditionalInformation";
import * as ResultsReducer from "./resultsReducer";
import resultsReducer from './resultsReducer';
import Issue from "../models/Issue";
import ContributingInformation from "../models/ContributingInformation";
import Repo from "../models/Repo";
import OpenIssue from "../components/OpenIssue";

describe('results', () => {
  describe('.results', () => {
    describe('when action type is RESULT_CONTRIBUTING_UPDATE', () => {
      it('updates repo in results with new contributing information', () => {
        const initialState = {
          data: {
            // $FlowFixMe - Flow doesn't know how to handle number keys
            1: Repo.create({
              additionalInformation: AdditionalInformation.create({
                contributingInformation: ContributingInformation.create({name: "CONTRIBUTING.md"})
              })
            })
          }
        };
        const action = {
          type: 'RESULT_CONTRIBUTING_UPDATE',
          id: 1,
          payload: ContributingInformation.create({name: "UPDATED_CONTRIBUTING.md"})
        };

        const subject = resultsReducer(initialState, action);
        expect(subject.data[1].additionalInformation.contributingInformation.name).toEqual('UPDATED_CONTRIBUTING.md');
      });
    });
    describe('when action type is RESULT_FETCHING_ADDITIONAL_UPDATE', () => {
      it('updates repo in results with fetching additional == true', () => {
        const initialState = {
          data: {
            // $FlowFixMe - Flow doesn't know how to handle number keys
            1: Repo.create({fetchingAdditional: false})
          }
        };
        const action = {
          type: 'RESULT_FETCHING_ADDITIONAL_UPDATE',
          id: 1,
          payload: true
        };

        const subject = resultsReducer(initialState, action);
        expect(subject.data[1].fetchingAdditional).toBeTruthy();
      });
    });
    describe('when action type is RESULT_OPEN_ISSUES_UPDATE', () => {
      it('updates open issues for Repo', () => {
        const initialState = {
          data: {
            // $FlowFixMe
            1: Repo.create({
              additionalInformation: AdditionalInformation.create({openIssues: []})
            })
          }
        };
        const action = {
          type: 'RESULT_OPEN_ISSUES_UPDATE',
          id: 1,
          payload: [Issue.create({title: 'New Open Issue'})]
        };

        const subject = resultsReducer(initialState, action);

        expect(subject.data[1].additionalInformation.openIssues).toHaveLength(1);
        expect(subject.data[1].additionalInformation.openIssues[0].title).toEqual('New Open Issue');
      });
    });
    describe('when action type is RESULT_SUGGESTED_ISSUES_UPDATE', () => {
      it('updates suggested issues for Repo', () => {
        const initialState = {
          data: {
            // $FlowFixMe
            1: Repo.create({
              additionalInformation: AdditionalInformation.create({suggestedIssues: []})
            })
          }
        };
        const action = {
          type: 'RESULT_SUGGESTED_ISSUES_UPDATE',
          id: 1,
          payload: [Issue.create({title: 'New Open Issue'})]
        };

        const subject = resultsReducer(initialState, action);

        expect(subject.data[1].additionalInformation.suggestedIssues).toHaveLength(1);
        expect(subject.data[1].additionalInformation.suggestedIssues[0].title).toEqual('New Open Issue');
      });
    });
    describe('when action type is RESULTS_DATA_UPDATE', () => {
      it('updates results data and sortedIds', () => {
        const initialState = {
          data: {},
          sortedIds: []
        };
        const action = {
          type: 'RESULTS_DATA_UPDATE',
          payload: {
            results: {
              // $FlowFixMe
              1: Repo.create({name: 'Test Repo'})
            },
            sortedIds: [1]
          }
        };

        const subject = resultsReducer(initialState, action);

        expect(subject.data[1].name).toEqual('Test Repo');
        expect(subject.sortedIds).toEqual([1]);
      });
    });
    describe('when action type is FETCHING_UPDATE', () => {
      it('updates fetching', () => {
        const initialState = {
          fetching: false
        };
        const action = {
          type: 'FETCHING_UPDATE',
          payload: true
        };

        const subject = resultsReducer(initialState, action);

        expect(subject.fetching).toBeTruthy();
      });
    });
  });

  describe('.result', () => {
    describe('when action type is RESULT_CONTRIBUTING_UPDATE', () => {
      let initial;
      let initialAdditionalInformation;
      const action = {
        type: 'RESULT_CONTRIBUTING_UPDATE',
        payload: ContributingInformation.create({name: 'New Contributing', content: 'Updated'})
      };

      beforeEach(() => {
        initialAdditionalInformation = AdditionalInformation.create({
          openIssues: [],
          contributingInformation: ContributingInformation.create()
        });
        initial = Repo.create({additionalInformation: initialAdditionalInformation});
      });

      it('updates repo with new additional information', () => {
        const subject = ResultsReducer.repo(initial, action);

        expect(subject.additionalInformation).toBeInstanceOf(AdditionalInformation);
        expect(subject.additionalInformation.contributingInformation).not.toBe(initialAdditionalInformation);
      });

      it('updates repo with new additional information properties', () => {
        const subject = ResultsReducer.repo(initial, action);

        expect(subject.additionalInformation.contributingInformation.name).toEqual('New Contributing');
        expect(subject.additionalInformation.contributingInformation.content).toEqual('Updated');
      });
    });

    describe('when action type is RESULT_OPEN_ISSUES_UPDATE', () => {
      const initialAdditionalInformation = AdditionalInformation.create({});
      let action, newIssue;

      beforeEach(() => {
        newIssue = Issue.create({title: 'Updated Open Issue'});
        action = {
          type: 'RESULT_OPEN_ISSUES_UPDATE',
          payload: [newIssue]
        };
      });

      it('updates repo with new additional information', () => {
        const initial = Repo.create({additionalInformation: initialAdditionalInformation});
        const subject = ResultsReducer.repo(initial, action);

        expect(subject.additionalInformation).toBeInstanceOf(AdditionalInformation);
        expect(subject.additionalInformation.contributingInformation).not.toBe(initialAdditionalInformation);
      });

      it('updates repo with new additional information properties', () => {
        const initial = Repo.create({additionalInformation: initialAdditionalInformation});
        const subject = ResultsReducer.repo(initial, action);

        expect(subject.additionalInformation.openIssues.length).toEqual(1);
        expect(subject.additionalInformation.openIssues).toContain(newIssue);
      });
    });

    describe('when action type is RESULT_SUGGESTED_ISSUES_UPDATE', () => {
      const initialAdditionalInformation = AdditionalInformation.create({});
      let action, newIssue;

      beforeEach(() => {
        newIssue = Issue.create({title: 'Updated Suggested Issue'});
        action = {
          type: 'RESULT_SUGGESTED_ISSUES_UPDATE',
          payload: [newIssue]
        };
      });

      it('updates repo with new additional information', () => {
        const initial = Repo.create({additionalInformation: initialAdditionalInformation});
        const subject = ResultsReducer.repo(initial, action);

        expect(subject.additionalInformation).toBeInstanceOf(AdditionalInformation);
        expect(subject.additionalInformation.contributingInformation).not.toBe(initialAdditionalInformation);
      });

      it('updates repo with new additional information properties', () => {
        const initial = Repo.create({additionalInformation: initialAdditionalInformation});
        const subject = ResultsReducer.repo(initial, action);

        expect(subject.additionalInformation.suggestedIssues.length).toEqual(1);
        expect(subject.additionalInformation.suggestedIssues).toContain(newIssue);
      });
    });

    describe('when action type is RESULT_FETCHING_ADDITIONAL_UPDATE', () => {
      it('updates repo with fetching additional == true', () => {
        const initial = Repo.create({});
        const action = {
          type: 'RESULT_FETCHING_ADDITIONAL_UPDATE',
          payload: true
        };

        const subject = ResultsReducer.repo(initial, action);

        expect(subject instanceof Repo).toBeTruthy();
        expect(subject).not.toBe(initial);
        expect(subject.fetchingAdditional).toBe(true);
      });

      it('updates repo with fetching additional == false', () => {
        const initial = Repo.create({});
        const action = {
          type: 'RESULT_FETCHING_ADDITIONAL_UPDATE',
          payload: false
        };
        const subject = ResultsReducer.repo(initial, action);

        expect(subject).toBeInstanceOf(Repo);
        expect(subject).not.toBe(initial);
        expect(subject.fetchingAdditional).toBe(false);
      });
    });
  });

  describe('.additionalInformation', () => {
    describe('when action type is RESULT_CONTRIBUTING_UPDATE', () => {
      const action = {
        type: 'RESULT_CONTRIBUTING_UPDATE',
        payload: ContributingInformation.create({name: 'New Contributing', content: 'Updated'})
      };

      it('returns a new AdditionalInformation', () => {
        const contributing = ContributingInformation.create({name: 'CONTRIBUTING', content: 'Read here'});
        const initial = AdditionalInformation.create({contributingInformation: contributing});

        const subject = ResultsReducer.additionalInformation(initial, action);

        expect(subject).toBeInstanceOf(AdditionalInformation);
        expect(subject).not.toBe(initial);
      });

      it('returns additional information with updated contributing information', () => {
        const contributing = ContributingInformation.create({name: 'CONTRIBUTING', content: 'Read here'});
        const initial = AdditionalInformation.create({contributingInformation: contributing, openIssues: []});

        const subject = ResultsReducer.additionalInformation(initial, action);

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

        const subject = ResultsReducer.additionalInformation(initial, action);

        expect(subject).toBeInstanceOf(AdditionalInformation);
        expect(subject).not.toBe(initial);
      });

        it('returns AdditionalInformation with updated open issues', () => {
          const additionalInformation = AdditionalInformation.create({openIssues: [], suggestedIssues: []});

          const subject = ResultsReducer.additionalInformation(additionalInformation, action);

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

        const subject = ResultsReducer.additionalInformation(initial, action);

        expect(subject).toBeInstanceOf(AdditionalInformation);
        expect(subject).not.toBe(initial);
      });

      it('returns additional information with updated suggested issues', () => {
        const additionalInformation = AdditionalInformation.create({openIssues: [], suggestedIssues: []});

        const subject = ResultsReducer.additionalInformation(additionalInformation, action);

        expect(subject.suggestedIssues.length).toEqual(1);
        expect(subject.suggestedIssues[0].title).toEqual('New Suggested Issue');
        expect(subject.openIssues).toEqual(additionalInformation.openIssues);
      });
    });
  });
});
