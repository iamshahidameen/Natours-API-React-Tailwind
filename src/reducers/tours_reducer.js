import {
  ALL_TOURS_BEGIN,
  SINGLE_TOUR_BEGIN,
  GET_SINGLE_TOUR_SUCCESS,
  GET_ALL_TOURS_SUCCESS,
} from '../actions';

const tours_reducer = (state, action) => {
  if (action.type === ALL_TOURS_BEGIN) {
    console.log('ALL_TOURS_BEGIN');
    return { ...state, all_tours_loading: true };
  }
  if (action.type === SINGLE_TOUR_BEGIN) {
    console.log('SINGLE_TOUR_BEGIN');
    return { ...state, single_tour_loading: true };
  }
  if (action.type === GET_SINGLE_TOUR_SUCCESS) {
    console.log('GET_SINGLE_TOUR_SUCCESS');
    return { ...state, all_tours_loading: true };
  }
  if (action.type === GET_ALL_TOURS_SUCCESS) {
    console.log('GET_ALL_TOURS_SUCCESS');
    return { ...state, all_tours_loading: true };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default tours_reducer;
