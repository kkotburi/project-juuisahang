import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const clickCategory = (code) => {
    navigate(`/category/${code}`);
  };

  return (
    <div>
      <button onClick={() => clickCategory('a')}>술자리 팁</button>
      <button onClick={() => clickCategory('b')}>건배사</button>
      <button onClick={() => clickCategory('c')}>술 게임</button>
      <button onClick={() => clickCategory('d')}>숙취해소법</button>
    </div>
  );
};

export default Header;
