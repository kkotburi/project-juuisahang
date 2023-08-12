import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from 'store';
import usePost from 'hooks/usePost';
import useInput from 'hooks/useInput';
import WriteContents from './WriteContents';
import EditorContents from './EditorContents';
import { St } from './WriteStyle';

const EditorBox = () => {
  const navigate = useNavigate();
  const currentUser = useUserStore((state) => state.currentUser);

  const { addMutation } = usePost();

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
      nickname: currentUser.nickname,
      profileImg: currentUser.profileImg,
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
    <St.WriteContainer>
      <St.WriteCancelButtonBox>
        <St.WriteCancelButton onClick={handleClickCancel}>글 작성 취소</St.WriteCancelButton>
      </St.WriteCancelButtonBox>
      <form onSubmit={handleSubmitPost}>
        <WriteContents
          title={title}
          onChangeTitle={onChangeTitle}
          category={category}
          onChangeCategory={onChangeCategory}
        />
        <EditorContents body={body} setBody={setBody} />
        <St.WriteAddButtonBox>
          <St.WriteAddButton>작성</St.WriteAddButton>
        </St.WriteAddButtonBox>
      </form>
    </St.WriteContainer>
  );
};

export default EditorBox;
