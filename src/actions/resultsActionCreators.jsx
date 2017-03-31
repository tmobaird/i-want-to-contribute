/*
 * The action creators in this file will modify all of the parts of the redux state
 * that are within state.results.
 */
export function updateResults(data) {
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

export function updateResult(id, data) {
  return {
    type: "RESULT_UPDATE",
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
