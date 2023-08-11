import React from 'react';
import { styled } from 'styled-components';

const WriteContents = ({ title, onChangeTitle, category, onChangeCategory }) => {
  return (
    <WriteBox>
      <WriteCategory value={category} onChange={onChangeCategory}>
        <option>카테고리 선택</option>
        <option>술자리 팁</option>
        <option>건배사</option>
        <option>술 게임</option>
        <option>숙취해소법</option>
      </WriteCategory>
      <WriteTitle type="text" placeholder="제목을 입력해주세요" value={title} onChange={onChangeTitle} />
    </WriteBox>
  );
};

export default WriteContents;

const WriteBox = styled.div`
  display: inline-flex;
  margin: 15px 0;
`;

const WriteCategory = styled.select`
  font-size: 14px;
  background-color: #f7f9fc;
  border: 1px solid #dbdde6;
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
`;

const WriteTitle = styled.input`
  width: 990px;
  font-size: 18px;
  background-color: #f7f9fc;
  border: 1px solid #dbdde6;
  border-radius: 5px;
  padding: 7px;
`;
