import Repo from "../models/Repo";
import {repo} from "./repoReducer";
import ContributingInformation from "../models/ContributingInformation";
import AdditionalInformation from "../models/AdditionalInformation";
import Issue from "../models/Issue";

describe('.repo', () => {
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
      const subject = repo(initial, action);

      expect(subject.additionalInformation).toBeInstanceOf(AdditionalInformation);
      expect(subject.additionalInformation.contributingInformation).not.toBe(initialAdditionalInformation);
    });

    it('updates repo with new additional information properties', () => {
      const subject = repo(initial, action);

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
      const subject = repo(initial, action);

      expect(subject.additionalInformation).toBeInstanceOf(AdditionalInformation);
      expect(subject.additionalInformation.contributingInformation).not.toBe(initialAdditionalInformation);
    });

    it('updates repo with new additional information properties', () => {
      const initial = Repo.create({additionalInformation: initialAdditionalInformation});
      const subject = repo(initial, action);

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
      const subject = repo(initial, action);

      expect(subject.additionalInformation).toBeInstanceOf(AdditionalInformation);
      expect(subject.additionalInformation.contributingInformation).not.toBe(initialAdditionalInformation);
    });

    it('updates repo with new additional information properties', () => {
      const initial = Repo.create({additionalInformation: initialAdditionalInformation});
      const subject = repo(initial, action);

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

      const subject = repo(initial, action);

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
      const subject = repo(initial, action);

      expect(subject).toBeInstanceOf(Repo);
      expect(subject).not.toBe(initial);
      expect(subject.fetchingAdditional).toBe(false);
    });
  });
});
