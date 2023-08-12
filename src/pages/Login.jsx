import supabase from 'lib/supabaseClient';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useValidator from 'hooks/useValidator';
import { St } from '../components/login/LoginStyle';

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors }
  } = useForm();
  const { validateEmail, validatePassword } = useValidator();

  const signInWithEmail = async ({ email, password }) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (data?.session) {
        navigate('/');
      } else if (error) alert(error);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <St.FormContainer>
      <St.Logo>
        <img
          src="https://sontbthwhfethyggenin.supabase.co/storage/v1/object/public/profile/logo_vertical.png"
          alt="주의사항 로고"
        />
        <p>주의사항에 오신 것을 환영해요. 👋🏻</p>
      </St.Logo>
      <form onSubmit={handleSubmit(signInWithEmail)}>
        <St.FormRow>
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
          <St.FormInput
            type="password"
            name="password"
            placeholder="비밀번호"
            className={errors.password ? 'error' : undefined}
            aria-invalid={isSubmitted ? (errors.password ? 'true' : 'false') : undefined}
            {...register('password', validatePassword)}
          />
          {errors.password && <St.FormAlert role="alert">{errors.password.message}</St.FormAlert>}
        </St.FormRow>
        <St.ButtonBox>
          <St.ButtonPrimary disabled={isSubmitting}>로그인</St.ButtonPrimary>
        </St.ButtonBox>
        <St.JoinLinkBox>
          아직 회원이 아니신가요?
          <Link to="/join">회원가입하러 가기</Link>
        </St.JoinLinkBox>
      </form>
    </St.FormContainer>
  );
};

export default Login;
