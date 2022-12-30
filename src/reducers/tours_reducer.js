import {
  GET_TOURS_BEGIN,
  GET_TOURS_SUCCESS,
  GET_TOURS_ERROR,
} from '../actions';

const tours_reducer = (state, action) => {
  if (action.type === GET_TOURS_BEGIN) {
    console.log('GET_TOURS_BEGIN');
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
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default tours_reducer;
