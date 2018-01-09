// @flow
import AdditionalInformation from "../models/AdditionalInformation";
import resultsReducer from "./resultsReducer";
import Issue from "../models/Issue";
import ContributingInformation from "../models/ContributingInformation";
import Repo from "../models/Repo";
import OpenIssue from "../components/OpenIssue";
import {repo} from "./repoReducer";
import {additionalInformation} from "./additionalInformationReducer";

describe('resultsReducer', () => {
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
});
