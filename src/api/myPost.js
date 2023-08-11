import supabase from 'lib/supabaseClient';

const getMyPosts = async () => {
  const user = await supabase.auth.getSession();
  const { data } = await supabase.from('posts').select().eq('userId', user.data.session.user.id);
  return data;
};

const getMyLikes = async () => {
  const user = await supabase.auth.getSession();
  const { data } = await supabase
    .from('posts')
    .select()
    .contains('likes', [`${user.data.session.user.id}`]);
  return data;
};

export { getMyPosts, getMyLikes };
