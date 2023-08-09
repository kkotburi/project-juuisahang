import supabase from 'lib/supabaseClient';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useValidator from 'hooks/useValidator';

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
        console.log('data => ', data);
        navigate('/');
      } else if (error) console.error(error);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(signInWithEmail)}>
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
          <div>
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              aria-invalid={isSubmitted ? (errors.password ? 'true' : 'false') : undefined}
              {...register('password', validatePassword)}
            />
            {errors.password && <small role="alert">{errors.password.message}</small>}
          </div>
          <button disabled={isSubmitting}>로그인</button>
          <Link to="/join">회원가입</Link>
        </form>
      </div>
    </>
  );
};

export default Login;
