import supabase from 'lib/supabaseClient';
import supabaseClient from 'lib/supabaseClient';

const getPosts = async () => {
  const { data } = await supabaseClient.from('posts').select('*');
  return data;
};

const getDetail = async (id) => {
  const { data } = await supabaseClient.from('posts').select().eq('id', id);
  return data;
};

const deletePost = async (id) => {
  await supabaseClient.from('posts').delete().eq('id', id);
};

const updatePost = async (post) => {
  await supabaseClient.from('posts').update(post).eq('id', post.id);
};

const updateLikes = async (post) => {
  await supabaseClient.from('posts').update(post).eq('id', post.id);
};

const insertPost = async ({ category, title, body }) => {
  const { data } = await supabase
    .from('posts')
    .insert([{ category: `${category}`, title: `${title}`, body: `${body}` }]);
};

export { getPosts, getDetail, deletePost, updatePost, updateLikes, insertPost };
