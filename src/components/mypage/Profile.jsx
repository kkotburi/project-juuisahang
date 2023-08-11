import React, { useRef, useState } from 'react';
import { getProfile, updateProfileNickname, updateProfileImage } from 'api/profile';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import MyPost from './MyPost';
import { St } from './ProfileStyle';

const Profile = () => {
  const [nickname, setNickname] = useState('');
  const [isUpdateProfile, setIsUpdateProfile] = useState(false);

  const {
    data: member,
    isLoading,
    error
  } = useQuery('members', getProfile, {
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

  const imageFileInput = useRef();

  const onClickImageFile = () => imageFileInput.current.click();

  const profileImageUpdate = async (e) => {
    setIsUpdateProfile(true);
    try {
      const profileImage = e.target.files[0];
      await updateProfileImageMutation.mutateAsync({
        file: profileImage,
        email: member.email
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
    <St.PageContainer>
      <div key={member.id}>
        <St.ProfileWarp>
          <St.ProfileImageBox>
            <St.ProfileImage
              alt="이미지 준비중"
              src={member.user_metadata.profileImg}
              onClick={onClickImageFile}
            ></St.ProfileImage>
          </St.ProfileImageBox>
          <St.ContentsBox>
            <St.ImageInput type="file" accept="image/*" ref={imageFileInput} onChange={profileImageUpdate} />
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
                  defaultValue={isUpdateProfile ? nickname : member.user_metadata.nickname}
                  onChange={nicknameChangeHandler}
                />
              </div>
              <St.NicknameChangeBtn onClick={() => nicknameUpdateBtn(member)}>닉네임 변경</St.NicknameChangeBtn>
            </St.ContentsForm>
          </St.ContentsBox>
        </St.ProfileWarp>
        <St.MyPostWarp>
          <MyPost />
        </St.MyPostWarp>
      </div>
    </St.PageContainer>
  );
};
export default Profile;
