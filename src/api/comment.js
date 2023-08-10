import supabase from 'lib/supabaseClient';

const getComments = async () => {
  const { data } = await supabase.from('comments').select();
  return data;
};

const deleteComment = async (id) => {
  const { data } = await supabase.from('comments').delete().eq('id', `${id}`);
};

//사용X
const updateComment = async (comment) => {
  await supabase.from('comments').update(comment).eq('id', comment.id);
};

const insertComment = async ({ name, body }) => {
  const { data } = await supabase.from('comments').insert([{ name: `${name}`, body: `${body}` }]);
};

export { getComments, deleteComment, updateComment, insertComment };
