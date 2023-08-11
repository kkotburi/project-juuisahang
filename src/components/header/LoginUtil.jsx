import supabase from 'lib/supabaseClient';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const LoginUtil = ({ currentUser }) => {
  const navigate = useNavigate();

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <span>{currentUser?.nickname}</span>
        <span>▼</span>
      </div>
      {isOpen && (
        <div>
          <button onClick={signOut}>로그아웃</button>
          <button
            onClick={() => {
              navigate('/mypage');
            }}
          >
            마이페이지
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginUtil;
