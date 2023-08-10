import supabase from 'lib/supabaseClient';

const getProfile = async (id) => {
  const { data } = await supabase.from('members').select('*').eq('id', id);
  const [member] = data;
  if (data) {
    const imageDownload = await supabase.storage.from('members').download(member.profileImage);
    console.log(imageDownload.data);
  }
  return member;
};

const updateProfileNickname = async (member) => {
  await supabase.from('members').update(member).eq('member.id', member.id);
};

const updateProfileImage = async ({ file, id }) => {
  const { data } = await supabase.storage.from('profile').upload(`/${id}/${file.name}`, file, {
    upsert: true,
    contentType: 'fileBody'
  });

  if (data) {
    const updatePath = await supabase.from('members').update({ profileImage: data.path }).eq('id', id);
    return updatePath.data;
  }
};

export { getProfile, updateProfileNickname, updateProfileImage };
