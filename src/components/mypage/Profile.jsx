import React, { useState } from 'react';
import { getProfile, updateProfileNickname, updateProfileImage } from 'api/profile';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import MyPost from './MyPost';
import { St } from './ProfileStyle';

const Profile = () => {
  const [nickname, setNickname] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [isUpdateProfile, setIsUpdateProfile] = useState(false);
  const [selectedFile, setSelectedFile] = useState('');

  const {
    data: member,
    isLoading,
    error
  } = useQuery('members', (id) => getProfile('d54bbe34-9938-4d1b-a21c-cbc87be84e7e'), {
    refetchOnWindowFocus: false
  });

  const queryClient = useQueryClient();

  const updateMutation = useMutation(updateProfileNickname, {
    onSuccess: () => {
      queryClient.invalidateQueries('members');
    }
  });

  const updateProfileImageMutation = useMutation(updateProfileImage, {
    onSuccess: () => {
      queryClient.invalidateQueries('members');
    }
  });

  const nicknameChangeHandler = (e) => setNickname(e.target.value);

  const profileImageUpdate = async (e) => {
    setIsUpdateProfile(true);
    try {
      const profileImage = e.target.files[0];
      await updateProfileImageMutation.mutateAsync({
        file: profileImage,
        id: 'd54bbe34-9938-4d1b-a21c-cbc87be84e7e'
      });
      setIsUpdateProfile(false);
      alert('프로필 사진 변경 완료');
    } catch (error) {
      console.error('프로필 사진 변경 실패', error);
    }
  };

  const nicknameUpdateBtn = async (member) => {
    if (!nickname) {
      alert('닉네임을 입력해주세요');
      return;
    }

    setIsUpdateProfile(true);

    const updateNickname = {
      ...member,
      nickname
    };

    try {
      await updateMutation.mutateAsync(updateNickname);
      setIsUpdateProfile(false);
      alert('닉네임 변경 완료');
    } catch (error) {
      console.error('닉네임 변경 실패', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    // <St.PageContainer>
    //   <St.ProfileContainer>왼</St.ProfileContainer>
    //   <St.MyPostWarp>오</St.MyPostWarp>
    // </St.PageContainer>
    // 테스트 코드
    <St.PageContainer>
      <div key={member.id}>
        <St.ProfileWarp>
          <St.ProfileContainer>
            <St.ProfileImageBox>
              <St.ProfileImage alt="이미지 준비중" src={member.profileImage}></St.ProfileImage>
            </St.ProfileImageBox>
            <St.ContentsBox>
              <input type="file" accept="image/*" onChange={profileImageUpdate} />
              <St.ContentsForm onSubmit={(e) => e.preventDefault()}>
                <div>
                  <St.ContentsLabel>이메일</St.ContentsLabel>
                  <St.ContentsInput type="email" value={member.email} disabled />
                </div>
                <div>
                  <St.ContentsLabel>닉네임</St.ContentsLabel>
                  <St.ContentsInput
                    type="text"
                    maxLength={6}
                    defaultValue={isUpdateProfile ? nickname : member.nickname}
                    onChange={nicknameChangeHandler}
                  />
                </div>
                <St.NicknameChangeBtn onClick={() => nicknameUpdateBtn(member)}>닉네임 변경</St.NicknameChangeBtn>
              </St.ContentsForm>
            </St.ContentsBox>
          </St.ProfileContainer>
        </St.ProfileWarp>
        <St.MyPostWarp>
          <MyPost />
        </St.MyPostWarp>
      </div>
    </St.PageContainer>
  );
};
export default Profile;

{
  /* 유저 정보 받아와서 사용할 기본 코드 */
}
{
  /* <div style={{ padding: '10px' }}>
        <img src={profileImage} alt="이미지 준비중" />
        <input type="file" />
        <form onSubmit={profileUpdateHandler}>
          <p>Email</p>
          <input type="email" placeholder={getProfile.email} disabled={true} />
          <p>Nickname</p>
          <input type="text" maxLength={6} value={nickname} onChange={nicknameChangeHandler} />
          <button type="submit" onClick={updateProfile}>
            프로필 수정
          </button>
        </form>
      </div> */
}
