import supabase from 'lib/supabaseClient';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useValidator from 'hooks/useValidator';
import { DEFAULT_PROFILE_IMAGE, PROFILE_BASE_URL } from 'constants/user';
import { St } from '../components/login/LoginStyle';
import { Alert, Button, Space } from 'antd';

const Join = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
    getValues
  } = useForm();

  const { validateEmail, validatePassword, validatePasswordConfirm, validateNickname } = useValidator();

  // 파일 업로드
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImg, setPreviewImg] = useState(DEFAULT_PROFILE_IMAGE);

  const signUp = async ({ email, password, nickname }) => {
    console.log(email, password, nickname, selectedFile);

    try {
      // 프로필이미지 storage에 업로드
      let downloadURL = DEFAULT_PROFILE_IMAGE;
      if (selectedFile) {
        const fileName = `./${email}/${selectedFile.name}`;
        const { data: _imgData, error: imgError } = await supabase.storage
          .from('profile')
          .upload(fileName, selectedFile, {
            upsert: true
          });

        if (imgError) {
          alert(imgError);
        }

        downloadURL = PROFILE_BASE_URL + fileName;
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            nickname,
            profileImg: downloadURL
          }
        }
      });

      if (data) {
        navigate('/');
        alert('회원가입이 완료되었습니다!');
      } else if (error) alert(error);
    } catch (error) {
      console.error(error);
    }
  };

  // 이미지 미리보기
  const handleFileSelect = async (event) => {
    const theFile = event.target.files[0];

    setSelectedFile(theFile);

    if (theFile) {
      // 프로필이미지 미리보기
      const reader = new FileReader();
      reader.onloadend = (finishedEvent) => {
        const {
          currentTarget: { result }
        } = finishedEvent;
        setPreviewImg(result);
      };
      reader.readAsDataURL(theFile);
    } else {
      setPreviewImg(DEFAULT_PROFILE_IMAGE);
    }
  };

  return (
    <St.FormContainer>
      <St.InfoBox>
        <Alert
          description="이 정보내용은 청소년 유해매체물로서 정보통신망 이용촉진법 및 정보보호 등에 관한 법률 및 청소년 보호법의 규정에
        의하여 19세 미만의 청소년은 사용할 수 없습니다."
          type="error"
          action={
            <Space direction="horizontal">
              <Button
                size="small"
                danger
                onClick={() => {
                  navigate('/');
                }}
              >
                19세 미만 나가기
              </Button>
            </Space>
          }
          closable
        />
      </St.InfoBox>

      <form onSubmit={handleSubmit(signUp)}>
        <St.FormRow>
          <label>이메일</label>
          <St.FormInput
            type="email"
            name="email"
            placeholder="이메일"
            className={errors.email ? 'error' : undefined}
            aria-invalid={isSubmitted ? (errors.email ? 'true' : 'false') : undefined}
            {...register('email', validateEmail)}
          />
          {errors.email && <St.FormAlert role="alert">{errors.email.message}</St.FormAlert>}
        </St.FormRow>
        <St.FormRow>
          <label>비밀번호</label>
          <St.FormInput
            type="password"
            name="password"
            placeholder="영문, 숫자, 특수문자 조합 8자리 이상 입력"
            className={errors.password ? 'error' : undefined}
            aria-invalid={isSubmitted ? (errors.password ? 'true' : 'false') : undefined}
            {...register('password', validatePassword)}
          />
          {errors.password && <St.FormAlert role="alert">{errors.password.message}</St.FormAlert>}
        </St.FormRow>
        <St.FormRow>
          <label>비밀번호 확인</label>
          <St.FormInput
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            className={errors.passwordConfirm ? 'error' : undefined}
            aria-invalid={isSubmitted ? (errors.passwordConfirm ? 'true' : 'false') : undefined}
            {...register('passwordConfirm', validatePasswordConfirm(getValues('password')))}
          />
          {errors.passwordConfirm && <St.FormAlert role="alert">{errors.passwordConfirm.message}</St.FormAlert>}
        </St.FormRow>

        <St.FormRow>
          <label>닉네임</label>
          <St.FormInput
            type="text"
            name="nickname"
            className={errors.nickname ? 'error' : undefined}
            aria-invalid={isSubmitted ? (errors.nickname ? 'true' : 'false') : undefined}
            {...register('nickname', validateNickname)}
          />
          {errors.nickname && <St.FormAlert role="alert">{errors.nickname.message}</St.FormAlert>}
        </St.FormRow>

        <St.FormRow>
          <label>프로필사진</label>
          <input type="file" onChange={handleFileSelect} />
          <St.ProfileBox>
            <img src={previewImg} alt="프로필 사진" />
          </St.ProfileBox>
        </St.FormRow>
        <St.ButtonBox>
          <St.ButtonPrimary disabled={isSubmitting}>회원가입</St.ButtonPrimary>
        </St.ButtonBox>
        <St.JoinLinkBox>
          이미 회원이세요?
          <Link to="/login">로그인하러 가기</Link>
        </St.JoinLinkBox>
      </form>
    </St.FormContainer>
  );
};

export default Join;
