import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export const getData = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}${query}`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
