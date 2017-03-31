import initialState from './initialState';
import objectAssign from 'object-assign';

export default function resultsReducer(state = initialState.results, action) {
  let newState;

  switch (action.type) {
    case "RESULT_UPDATE":
      const updatedResult = objectAssign({}, state.data[action.id], { additionalInformation: action.payload });
      const updatedData = objectAssign({}, state.data, {[action.id]: updatedResult});
      return objectAssign({}, state, {data: updatedData});
    case "RESULT_FETCHING_ADDITIONAL_INFO_UPDATE":
      const fetchingResult = objectAssign({}, state.data[action.id], { fetchingAdditional: action.payload });
      const newData = objectAssign({}, state.data, {[action.id]: fetchingResult});
      return objectAssign({}, state, {data: newData});
    case "RESULTS_DATA_UPDATE":
      return objectAssign({}, state, {data: action.payload});
    case "FETCHING_UPDATE":
      return objectAssign({}, state, {fetching: action.payload});
    default:
      return state;
  }
}
