import React from 'react';
import { useUserStore } from 'store';
import LoginUtil from './LoginUtil';
import LogoutUtil from './LogoutUtil';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const clickCategory = (code) => {
    navigate(`/category/${code}`);
  };

  // 조회
  const currentUser = useUserStore((state) => state.currentUser);
  //   console.log('주스탠드 => ', currentUser);

  return (
    <div>
      {currentUser ? <LoginUtil currentUser={currentUser} /> : <LogoutUtil />}
      <div>
        <button onClick={() => clickCategory('술자리 팁')}>술자리 팁</button>
        <button onClick={() => clickCategory('건배사')}>건배사</button>
        <button onClick={() => clickCategory('술 게임')}>술 게임</button>
        <button onClick={() => clickCategory('숙취해소법')}>숙취해소법</button>
      </div>
    </div>
  );
};

export default Header;
