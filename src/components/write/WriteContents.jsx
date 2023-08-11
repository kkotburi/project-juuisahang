import React from 'react';
import { St } from './WriteStyle';

const WriteContents = ({ title, onChangeTitle, category, onChangeCategory }) => {
  return (
    <St.WriteBox>
      <St.WriteCategory value={category} onChange={onChangeCategory}>
        <option>카테고리 선택</option>
        <option>술자리 팁</option>
        <option>건배사</option>
        <option>술 게임</option>
        <option>숙취해소법</option>
      </St.WriteCategory>
      <St.WriteTitle type="text" placeholder="제목을 입력해주세요" value={title} onChange={onChangeTitle} />
    </St.WriteBox>
  );
};

export default WriteContents;
