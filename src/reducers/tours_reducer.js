import {
  GET_TOURS_BEGIN,
  GET_TOURS_SUCCESS,
  GET_TOURS_ERROR,
  GET_SINGLE_TOUR_BEGIN,
  GET_SINGLE_TOUR_SUCCESS,
  GET_SINGLE_TOUR_ERROR,
} from '../actions';

const tours_reducer = (state, action) => {
  if (action.type === GET_TOURS_BEGIN) {
    return { ...state, get_tours_loading: true };
  }
  if (action.type === GET_TOURS_SUCCESS) {
    console.log('GET_TOURS_SUCCESS');
    return { ...state, get_tours_loading: false, get_tours: action.payload };
  }
  if (action.type === GET_TOURS_ERROR) {
    console.log('GET_TOURS_ERROR');
    return { ...state, get_tours_error: true };
  }
  if (action.type === GET_SINGLE_TOUR_BEGIN) {
    return { ...state, get_single_tour_loading: true };
  }
  if (action.type === GET_SINGLE_TOUR_SUCCESS) {
    return {
      ...state,
      get_single_tour_loading: false,
      get_single_tour: action.payload,
    };
  }
  if (action.type === GET_SINGLE_TOUR_ERROR) {
    return { ...state, get_single_tour_error: true };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default tours_reducer;
