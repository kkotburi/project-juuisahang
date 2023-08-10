// supabase data 없을 시 임시 사용을 위함
import axios from 'axios';

const SERVER_DRINKS = `${process.env.REACT_APP_API_URL}/drinks`;

const getDrinks = async () => {
  const response = await axios.get(SERVER_DRINKS);
  return response;
};

const SERVER_POSTS = `${process.env.REACT_APP_API_URL}/posts`;

const getPosts = async () => {
  const response = await axios.get(SERVER_POSTS);
  return response;
};

export { getDrinks, getPosts };
