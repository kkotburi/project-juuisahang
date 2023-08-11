import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const LogoutUtil = () => {
  return (
    <AuthContainder>
      <LoginLink to="/login">로그인</LoginLink>
    </AuthContainder>
  );
};

export default LogoutUtil;

const AuthContainder = styled.div`
  background-color: pink;

  width: 100px;
`;

const LoginLink = styled(Link)`
  background-color: red;

  text-decoration: none;
  color: black;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  &:hover {
    font-weight: 900;
  }
`;
