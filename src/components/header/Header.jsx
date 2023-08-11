import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useUserStore } from 'store';
import { styled } from 'styled-components';

import LoginUtil from './LoginUtil';
import LogoutUtil from './LogoutUtil';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 조회
  const currentUser = useUserStore((state) => state.currentUser);
  //   console.log('주스탠드 => ', currentUser);

  const clickLogo = () => {
    if (location.pathname === '/') {
      window.location.reload();
    } else {
      navigate('/');
    }
  };

  return (
    <HeaderContainer>
      <HeaderImg src="/logo.png" onClick={clickLogo} />
      <CategoryWrapper>
        <CategoryLink to="/category/술자리 팁">술자리 팁</CategoryLink>
        <CategoryLink to="/category/건배사">건배사</CategoryLink>
        <CategoryLink to="/category/술 게임">술 게임</CategoryLink>
        <CategoryLink to="/category/숙취해소법">숙취해소법</CategoryLink>
      </CategoryWrapper>
      {currentUser ? <LoginUtil currentUser={currentUser} /> : <LogoutUtil />}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  height: 100px;
  background-color: white;
  border-bottom: solid 1px #969696;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderImg = styled.img`
  width: 80px;
  height: auto;
  background-color: black;

  cursor: pointer;
`;

const CategoryWrapper = styled.div`
  background-color: yellow;

  width: 1000px;

  justify-content: center;
  display: grid;
  grid-template-columns: repeat(4, auto);
`;

const CategoryLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 18px;

  margin: 0px 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  &:hover {
    font-weight: 900;
  }
`;
