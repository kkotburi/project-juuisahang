import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const clickCategory = (code) => {
    navigate(`/category/${code}`);
  };

  return (
    <div>
      <button onClick={() => clickCategory('술자리 팁')}>술자리 팁</button>
      <button onClick={() => clickCategory('건배사')}>건배사</button>
      <button onClick={() => clickCategory('술 게임')}>술 게임</button>
      <button onClick={() => clickCategory('숙취해소법')}>숙취해소법</button>
    </div>
  );
};

export default Header;
