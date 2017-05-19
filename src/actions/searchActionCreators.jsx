import * as resultsActions from './resultsActionCreators';
import { searchGithub, getContributing, getOpenIssues } from '../utils/apiQueryHelper';
import { parseOpenIssues } from '../utils/openIssuesParser';

/*
 * The action creators in the file will modify all of the parts of the redux state
 * that are within state.search. It will also include some super action creators
 * that will dispatch other action creators.
 */
export function submitSearch(value) {
  return function (dispatch) {
    if(value !== "") {
      dispatch(resultsActions.fetchingStarted());
      dispatch(updateSubmitted());
      dispatch(updateSubmittedSearchTerm(value));
      setTimeout(() => {
        searchGithub(value)
          .then(function(response) {
            dispatch(resultsActions.updateResults(response.data));
          })
          .then(function(res) {
            dispatch(resultsActions.fetchingFinished());
          });
      }, 1000);
    }
  };
}

export function getAdditionalInfo(id, repoName) {
  return function (dispatch) {
    dispatch(resultsActions.fetchingAddionalInfoStarted(id));
    setTimeout(() => {
      Promise.all([
        getContributing(repoName)
          .then((response) => dispatch(resultsActions.updateResultContributing(id, response.data)))
          .catch((err) => dispatch(resultsActions.updateResultContributing(id, err.response.data))),
        getOpenIssues(repoName)
          .then((response) => { return parseOpenIssues(response.data.items) })
          .then((issues) => dispatch(resultsActions.updateOpenIssues(id, issues)))
          .catch((err, res) => { console.log(err) }) // Need to do something with these issues
      ]) // This will return a Promise, when the two promises inside this complete. This is used to set fetchingAdditionalInfo to false after both
      .then(responses => {
        dispatch(resultsActions.fetchingAddionalInfoFinished(id));
      });
    }, 1000);
  };
};

function updateSubmitted() {
  return {
    type: "SUBMITTED_UPDATE",
    payload: true
  }
}

function updateSubmittedSearchTerm(term) {
  return {
    type: "SUBMITTED_SEARCH_TERM_UPDATE",
    payload: term
  }
}
