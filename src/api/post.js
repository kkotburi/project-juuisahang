import supabaseClient from 'lib/supabaseClient';

const getPosts = async () => {
  const { data } = await supabaseClient.from('posts').select('*');
  return data;
};

const getDetail = async (id) => {
  const { data } = await supabaseClient.from('posts').select().eq('id', id);
  return data;
};

const addPost = async (post) => {
  await supabaseClient.from('posts').insert(post);
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

export { getPosts, getDetail, addPost, deletePost, updatePost, updateLikes };
