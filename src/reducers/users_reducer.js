import { GET_USER_BEGIN, GET_USER_SUCCESS, GET_USER_ERROR } from '../actions';

const tours_reducer = (state, action) => {
  if (action.type === GET_USER_BEGIN) {
    return { ...state, get_user_loading: true };
  }
  if (action.type === GET_USER_SUCCESS) {
    return {
      ...state,
      get_user_loading: false,
      get_user_success: true,
      get_user_response: action.payload,
    };
  }
  if (action.type === GET_USER_ERROR) {
    return { ...state, get_user_error: true, get_user_loading: false };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default tours_reducer;
