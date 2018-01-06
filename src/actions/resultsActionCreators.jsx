/*
 * The action creators in this file will modify all of the parts of the redux state
 * that are within state.results.
 */
import Repo from '../models/Repo';
import RepoSerializer from '../serializers/RepoSerializer';
import ContributingInformation from "../models/ContributingInformation";

export function updateResults(data) {
  const items = data.items;
  const results = {};
  const sortedIds = [];
  for (let i=0; i<items.length; i++) {
    const params = RepoSerializer.deserialize(items[i]);
    const repo = Repo.create(params);
    results[items[i].id] = repo;
    sortedIds.push(repo.id);
  }
  return {
    type: "RESULTS_DATA_UPDATE",
    payload: {
      sortedIds,
      results
    }
  }
}

export function updateOpenIssues(id, data) {
  return function (dispatch) {
    dispatch(updateResultOpenIssues(id, data.openIssues));
    dispatch(updateResultSuggestedIssues(id, data.suggestedIssues));
  }
}

export function updateResultContributing(id: number, data: ContributingInformation) {
  return {
    type: "RESULT_CONTRIBUTING_UPDATE",
    id,
    payload: data
  }
}

export function updateResultOpenIssues(id, data) {
  return {
    type: "RESULT_OPEN_ISSUES_UPDATE",
    id,
    payload: data
  }
}

export function updateResultSuggestedIssues(id, data) {
  return {
    type: "RESULT_SUGGESTED_ISSUES_UPDATE",
    id,
    payload: data
  }
}

export function fetchingStarted() {
  return {
    type: "FETCHING_UPDATE",
    payload: true
  }
}

export function fetchingFinished() {
  return {
    type: "FETCHING_UPDATE",
    payload: false
  }
}

export function fetchingAdditionalInfoStarted(id) {
  return {
    type: "RESULT_FETCHING_ADDITIONAL_UPDATE",
    id,
    payload: true
  }
}

export function fetchingAdditionalInfoFinished(id) {
  return {
    type: "RESULT_FETCHING_ADDITIONAL_UPDATE",
    id,
    payload: false
  }
}
