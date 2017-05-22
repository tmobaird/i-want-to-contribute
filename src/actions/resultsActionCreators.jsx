/*
 * The action creators in this file will modify all of the parts of the redux state
 * that are within state.results.
 */
export function updateResults(data) {
  const items = data.items;
  const results = {};
  const sortedIds = []
  for (var i=0; i<items.length; i++) {
    results[items[i].id] = items[i];
    sortedIds.push(items[i].id);
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
    dispatch(updateResultOpenIssues(id, data.openIssues))
    dispatch(updateResultSuggestedIssues(id, data.suggestedIssues))
  }
}

export function updateResultContributing(id, data) {
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

export function fetchingAddionalInfoStarted(id) {
  return {
    type: "RESULT_FETCHING_ADDITIONAL_INFO_UPDATE",
    id,
    payload: true
  }
}

export function fetchingAddionalInfoFinished(id) {
  return {
    type: "RESULT_FETCHING_ADDITIONAL_INFO_UPDATE",
    id,
    payload: false
  }
}
