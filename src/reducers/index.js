import { combineReducers } from 'redux';
import posts from '../reducers/posts/reducer';
import comments from '../reducers/comments/reducer';

export default combineReducers({
  posts,
  comments
});
