import supabase from 'lib/client';

const getPosts = async () => {
  const { data } = await supabase.from('posts').select('*');
  return data;
};

const getDetail = async (id) => {
  const { data } = await supabase.from('posts').select().eq('id', id);
  return data;
};

const deletePost = async (id) => {
  await supabase.from('posts').delete().eq('id', id);
  //   const { error } = await supabase.from('posts').delete().eq('id', `${id}`);
  //   return error;
};

const updatePost = async (post) => {
  await supabase.from('posts').update(post).eq('id', post.id);
};

export { getPosts, getDetail, deletePost, updatePost };
