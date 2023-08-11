import supabase from 'lib/supabaseClient';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginUtil = ({ currentUser }) => {
  const navigate = useNavigate();
  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div>
      {currentUser?.email}
      <button onClick={signOut}>로그아웃</button>
      <button
        onClick={() => {
          navigate('/mypage');
        }}
      >
        마이페이지
      </button>
    </div>
  );
};

export default LoginUtil;
