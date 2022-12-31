import axios from 'axios';
import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/tours_reducer';
import { tours_url } from '../utils/constants';

import {
  GET_TOURS_BEGIN,
  GET_TOURS_SUCCESS,
  GET_TOURS_ERROR,
  GET_SINGLE_TOUR_BEGIN,
  GET_SINGLE_TOUR_SUCCESS,
  GET_SINGLE_TOUR_ERROR,
} from '../actions';

const initialState = {
  get_tours_loading: false,
  get_tours: [],
  get_tours_error: false,
  get_single_tour_loading: false,
  get_single_tour: {},
  get_single_tour_error: false,
};

const ToursContext = React.createContext();

export const ToursProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getTours = async (url) => {
    dispatch({ type: GET_TOURS_BEGIN });

    try {
      const response = await axios.get(url);
      dispatch({ type: GET_TOURS_SUCCESS, payload: response.data.data.data });
    } catch (error) {
      dispatch({ type: GET_TOURS_ERROR });
    }
  };

  const getSingleTour = async (url) => {
    dispatch({ type: GET_SINGLE_TOUR_BEGIN });

    try {
      const response = await axios.get(url);
      dispatch({
        type: GET_SINGLE_TOUR_SUCCESS,
        payload: response.data.data.data,
      });
    } catch (error) {
      dispatch({ type: GET_SINGLE_TOUR_ERROR });
    }
  };

  return (
    <ToursContext.Provider value={{ ...state, getTours, getSingleTour }}>
      {children}
    </ToursContext.Provider>
  );
};

export const useToursContext = () => {
  return useContext(ToursContext);
};
