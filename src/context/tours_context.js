import React, { useContext, useReducer } from 'react';
import reducer from '../reducers/tours_reducer';
import {
  ALL_TOURS_BEGIN,
  SINGLE_TOUR_BEGIN,
  GET_SINGLE_TOUR_SUCCESS,
  GET_ALL_TOURS_SUCCESS,
} from '../actions';

const ToursContext = React.createContext();

export const ToursProvider = ({ children }) => {
  const initialState = {
    all_tours_loading: false,
    all_tours: [],
    single_tour_loading: false,
    single_tour: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ToursContext.Provider value={{ ...state }}>
      {children}
    </ToursContext.Provider>
  );
};

export const useToursContext = () => {
  return useContext(ToursContext);
};
