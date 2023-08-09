import { createClient } from '@supabase/supabase-js';
import axios from 'axios';

const SERVER_POSTS = `${process.env.REACT_APP_API_URL}/posts`;

const getPosts = async () => {
  const response = await axios.get(SERVER_POSTS);
  return response;
};

const supabase = createClient('https://project-nbc.supabase.co', `${process.env.REACT_APP_SUPABASE_KEY}`);

// const getPosts = async () => {
//   const response = await supabase.from('countries').select(*);
//   return response;
// };

export { getPosts };
