import * as resultsActions from './resultsActionCreators';
import { searchGithub, getContributing } from '../utils/githubHelper';

/*
 * The action creators in the file will modify all of the parts of the redux state
 * that are within state.search. It will also include some super action creators
 * that will dispatch other action creators.
 */
export function submitSearch(value) {
  return function (dispatch) {
    if(value !== "") {
      dispatch(resultsActions.fetchingStarted());
      setTimeout(() => {
        dispatch(updateSubmittedSearchTerm(value));
        dispatch(updateSubmitted());
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
      getContributing(repoName)
        .then((response) => dispatch(resultsActions.updateResult(id, response.data)))
        .then((res) => dispatch(resultsActions.fetchingAddionalInfoFinished(id)));
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
