import supabase from 'lib/supabaseClient';

const getProfile = async () => {
  const { data } = await supabase.auth.getSession();
  return data.session.user;
};

const updateProfileNickname = async (nickname) => {
  await supabase.auth.updateUser({ data: nickname });
};

const updateProfileImage = async ({ file, email }) => {
  const { data } = await supabase.storage.from('profile').upload(`/${email}/${file.name}`, file, {
    upsert: true,
    contentType: 'fileBody'
  });

  if (data) {
    const updatePath = await supabase.auth.updateUser({
      data: { profileImg: `https://sontbthwhfethyggenin.supabase.co/storage/v1/object/public/profile/${data.path}` }
    });
    return updatePath.data;
  }
};

export { getProfile, updateProfileNickname, updateProfileImage };
