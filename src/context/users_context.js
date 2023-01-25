import axios from 'axios';
import React, { useContext, useReducer } from 'react';
import reducer from '../reducers/users_reducer';

import { GET_USER_BEGIN, GET_USER_SUCCESS, GET_USER_ERROR } from '../actions';

const initialState = {
  get_user_loading: false,
  get_user_success: false,
  get_user_error: false,
};

const UsersContext = React.createContext();

export const UsersProvider = ({ children }) => {
  console.log('UsersProvider');
  const [state, dispatch] = useReducer(reducer, initialState);

  const getLoginUser = async (url, creds) => {
    dispatch({ type: GET_USER_BEGIN });

    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'Cookie',
      'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjOGEyNDgyMmY4ZmI4MTRiNTZmYTE5MiIsImlhdCI6MTY3NDY3MDAzMSwiZXhwIjoxNjgyNDQ2MDMxfQ.oSRxNBCtLs2TqQtTBgLZXbLpbnrnFygz7Iyn8bCdM24'
    );

    // let raw = JSON.stringify({
    //   email: 'john@example.com',
    //   password: 'test1234',
    // });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(creds),
      redirect: 'follow',
    };
    try {
      fetch(url, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          dispatch({
            type: GET_USER_SUCCESS,
            payload: result,
          });
          console.log(result);
        });
    } catch (error) {
      dispatch({ type: GET_USER_ERROR });
    }
  };

  return (
    <UsersContext.Provider value={{ ...state, getLoginUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsersContext = () => {
  return useContext(UsersContext);
};
