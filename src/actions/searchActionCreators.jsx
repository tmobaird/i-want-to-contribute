import { searchGithub, getContributing } from '../utils/githubHelper';

export function submitSearch(value) {
  return function (dispatch) {
    if(value != "") {
      dispatch(fetchingStarted());
      setTimeout(() => {
        dispatch(updateSubmittedSearchTerm(value));
        dispatch(updateSubmitted());
        searchGithub(value)
          .then(function(response) {
            dispatch(updateResults(response.data));
          })
          .then(function(res) {
            dispatch(fetchingFinished());
          });
      }, 1000);
    }
  };
}

export function getAdditionalInfo(id, repoName) {
  return function (dispatch) {
    dispatch(fetchingAddionalInfoStarted(id));
    setTimeout(() => {
      getContributing(repoName)
        .then((response) => dispatch(updateResult(id, response.data)))
        .then((res) => dispatch(fetchingAddionalInfoFinished(id)));
    }, 1000);
  };
};

function fetchingStarted() {
  return {
    type: "FETCHING_UPDATE",
    payload: true
  }
}

function fetchingFinished() {
  return {
    type: "FETCHING_UPDATE",
    payload: false
  }
}

function fetchingAddionalInfoStarted(id) {
  return {
    type: "RESULT_FETCHING_ADDITIONAL_INFO_UPDATE",
    id,
    payload: true
  }
}

function fetchingAddionalInfoFinished(id) {
  return {
    type: "RESULT_FETCHING_ADDITIONAL_INFO_UPDATE",
    id,
    payload: false
  }
}

function updateSubmitted() {
  return {
    type: "SUBMITTED_UPDATE",
    payload: true
  }
}

function updateResults(data) {
  const items = data.items;
  let result = {};
  for (var i=0; i<items.length; i++) {
    result[items[i].id] = items[i];
  }
  return {
    type: "RESULTS_DATA_UPDATE",
    payload: result
  }
}

function updateResult(id, data) {
  return {
    type: "RESULT_UPDATE",
    id,
    payload: data
  }
}

function updateSubmittedSearchTerm(term) {
  return {
    type: "SUBMITTED_SEARCH_TERM_UPDATE",
    payload: term
  }
}
