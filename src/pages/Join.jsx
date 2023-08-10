import supabase from 'lib/supabaseClient';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useValidator from 'hooks/useValidator';
import { DEFAULT_PROFILE_IMAGE, PROFILE_BASE_URL } from 'constants/user';

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
    <div>
      <form onSubmit={handleSubmit(signUp)}>
        <div>
          <label>이메일</label>
          <div>
            <input
              type="email"
              name="email"
              placeholder="이메일"
              aria-invalid={isSubmitted ? (errors.email ? 'true' : 'false') : undefined}
              {...register('email', validateEmail)}
            />
            {errors.email && <small role="alert">{errors.email.message}</small>}
          </div>
        </div>
        <div>
          <label>비밀번호</label>
          <div>
            <input
              type="password"
              name="password"
              placeholder="영문, 숫자, 특수문자 조합 8자리 이상 입력"
              aria-invalid={isSubmitted ? (errors.password ? 'true' : 'false') : undefined}
              {...register('password', validatePassword)}
            />
            {errors.password && <small role="alert">{errors.password.message}</small>}
          </div>
        </div>
        <div>
          <label>비밀번호 확인</label>
          <div>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              aria-invalid={isSubmitted ? (errors.passwordConfirm ? 'true' : 'false') : undefined}
              {...register('passwordConfirm', validatePasswordConfirm(getValues('password')))}
            />
            {errors.passwordConfirm && <small role="alert">{errors.passwordConfirm.message}</small>}
          </div>
        </div>

        <div>
          <label>닉네임</label>
          <div>
            <input
              type="text"
              name="nickname"
              aria-invalid={isSubmitted ? (errors.nickname ? 'true' : 'false') : undefined}
              {...register('nickname', validateNickname)}
            />
          </div>
          {errors.nickname && <small role="alert">{errors.nickname.message}</small>}
        </div>

        <div>
          <label>프로필사진</label>
          <div>
            <div>
              <img src={previewImg} alt="프로필 사진" />
            </div>
            <input type="file" onChange={handleFileSelect} />
          </div>
        </div>
        <div>
          <button disabled={isSubmitting}>회원가입</button>
        </div>
      </form>
    </div>
  );
};

export default Join;
