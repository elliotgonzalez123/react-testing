import { types } from './types';
import axios from 'axios';

export const getPosts = () => async dispatch => {
  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts?_limit=10'
    );
    dispatch({
      type: types.GET_POSTS,
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
};
