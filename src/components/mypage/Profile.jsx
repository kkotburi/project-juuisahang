import React, { useState } from 'react';
import { getProfile, updateProfileNickname, updateProfileImage } from 'api/profile';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import MyPost from './MyPost';
import { useUserStore } from 'store';

const Profile = () => {
  const [nickname, setNickname] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [isUpdateProfile, setIsUpdateProfile] = useState(false);
  const [selectedFile, setSelectedFile] = useState('');

  const {
    data: member,
    isLoading,
    error
  } = useQuery('members', () => getProfile('c4ddad6c-f377-40d3-9636-573e952d5f31'), {
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
      await updateProfileImageMutation.mutateAsync({ file: profileImage, id: 'c4ddad6c-f377-40d3-9636-573e952d5f31' });
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
    // 테스트 코드
    <div>
      <p style={{ padding: '10px' }}>[TEST DATA]</p>
      <div style={{ padding: '10px' }} key={member.id}>
        <div style={{ width: '120px', height: '120px', borderRadius: '100%', overflow: 'hidden' }}>
          {/* <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              imageRendering: '-webkit-optimize-contrast !important'
            }}
            alt="이미지 준비중"
            src={member.profileImage}
          ></img> */}
        </div>
        <input type="file" accept="image/*" onChange={profileImageUpdate} />
        <form onSubmit={(e) => e.preventDefault()}>
          <p>이메일</p>
          <input type="email" value={member.email} disabled />
          <p>닉네임</p>
          <input
            type="text"
            maxLength={6}
            defaultValue={isUpdateProfile ? nickname : member.nickname}
            onChange={nicknameChangeHandler}
          />
          <button style={{ marginLeft: '8px' }} onClick={() => nicknameUpdateBtn(member)}>
            닉네임 변경
          </button>
        </form>
      </div>
      {/* 유저 정보 받아와서 사용할 기본 코드 */}
      {/* <div style={{ padding: '10px' }}>
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
      </div> */}
      <MyPost />
    </div>
  );
};
export default Profile;
