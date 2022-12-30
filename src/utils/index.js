import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export const getData = async (query) => {
  //   console.log(`${BASE_URL}${query}`);

  try {
    const response = await axios.get(`${BASE_URL}${query}`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
export const getAllTours = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tours`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
export const getTour = async (query) => {
  console.log(`${BASE_URL}${query}`);
  try {
    const response = await axios.get(`${BASE_URL}${query}`);
    const test = await response.data;

    console.log(test);

    return test;
  } catch (Error) {
    console.log(Error);
    return [];
  }
};
