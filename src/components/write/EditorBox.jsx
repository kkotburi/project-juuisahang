import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from 'store';
import usePost from 'hooks/usePost';
import useInput from 'hooks/useInput';
import EditorContents from './EditorContents';
import { styled } from 'styled-components';
import WriteContents from './WriteContents';

const EditorBox = () => {
  const navigate = useNavigate();
  const currentUser = useUserStore((state) => state.currentUser);
  // console.log(currentUser);

  const { addMutation } = usePost();
  // console.log(addMutation);

  const [title, onChangeTitle, setTitle] = useInput();
  const [body, onChangeBody, setBody] = useInput();
  const [category, onChangeCategory, setCategory] = useInput();

  const handleSubmitPost = (e) => {
    e.preventDefault();

    if (!title || !body) {
      return alert('내용을 입력해주세요');
    } else if (!category) {
      return alert('카테고리를 선택해주세요');
    }

    const newPost = {
      userId: currentUser.uid,
      title,
      body,
      likes: [],
      category
    };

    addMutation.mutate(newPost);

    setTitle('');
    setBody('');
    setCategory('');
  };

  const handleClickCancel = () => {
    if (window.confirm('글 작성을 취소하시겠습니까?')) {
      alert('이전 페이지로 이동하겠습니다.');
      navigate(-1);
    } else {
      alert('글 작성으로 돌아가겠습니다.');
    }
  };

  return (
    <WriteContainer>
      <WriteCancelButtonBox>
        <WriteCancelButton onClick={handleClickCancel}>글 작성 취소</WriteCancelButton>
      </WriteCancelButtonBox>
      <form onSubmit={handleSubmitPost}>
        <WriteContents
          title={title}
          onChangeTitle={onChangeTitle}
          category={category}
          onChangeCategory={onChangeCategory}
        />
        <EditorContents body={body} setBody={setBody} />
        <WriteAddButtonBox>
          <WriteAddButton>작성</WriteAddButton>
        </WriteAddButtonBox>
      </form>
    </WriteContainer>
  );
};

export default EditorBox;

const WriteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
`;

const WriteCancelButtonBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
`;

const WriteCancelButton = styled.button`
  font-size: 16px;
  color: #000000;
  text-decoration: underline;
  /* background-color: #4b4b4b; */
  background-color: transparent;
  border: none;
  border-radius: 15px;
  padding: 7px 35px;
  cursor: pointer;

  &:hover {
    /* background-color: #bb3535; */
    font-weight: 600;
    /* font-style: italic; */
  }
`;

const WriteAddButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WriteAddButton = styled.button`
  font-size: 16px;
  color: #ffffff;
  background-color: #e24c4b;
  border: none;
  border-radius: 15px;
  margin: 50px 0;
  padding: 7px 35px;
  cursor: pointer;

  &:hover {
    background-color: #bb3535;
  }
`;
