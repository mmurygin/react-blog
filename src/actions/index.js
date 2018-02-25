import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=muryginm';
const POSTS_URL = `${ROOT_URL}/posts${API_KEY}`;

export function fetchPosts() {
  const request = axios.get(POSTS_URL);

  return {
    type: FETCH_POSTS,
    payload: request,
  };
}

export function createPost(title, categories, content) {
  const request = axios.post(POSTS_URL, {
    title,
    categories,
    content,
  });

  return {
    type: CREATE_POST,
    payload: request,
  };
}
