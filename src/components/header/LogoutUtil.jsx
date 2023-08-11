import React from 'react';
import { St } from './HeaderStyle';

const LogoutUtil = () => {
  return (
    <St.AuthContainder>
      <St.LoginLink to="/login">로그인</St.LoginLink>
    </St.AuthContainder>
  );
};

export default LogoutUtil;
