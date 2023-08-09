import axios from 'axios';

const SERVER_POSTS = `${process.env.REACT_APP_API_URL}/posts`;

const getPosts = async () => {
  const response = await axios.get(SERVER_POSTS);
  return response;
};

export { getPosts };
