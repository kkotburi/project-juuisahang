import React from 'react';
import { useUserStore } from 'store';
import useInput from 'hooks/useInput';
import usePost from 'hooks/usePost';

const Write = () => {
  const currentUser = useUserStore((state) => state.currentUser);
  console.log(currentUser);

  const [title, onChangeTitle, setTitle] = useInput();
  const [body, onChangeBody, setBody] = useInput();
  const [category, onChangeCategory, setCategory] = useInput();

  const { addMutation } = usePost();

  const handleSubmitPost = (e) => {
    e.preventDefault();

    const newPost = {
      userId: currentUser.uid,
      title,
      body,
      writer: currentUser.nickname,
      likes: [],
      category
    };

    addMutation.mutate(newPost);
    setTitle('');
    setBody('');
    setCategory('');
  };

  return (
    <form style={{ border: '2px solid black', margin: '10px', padding: '10px' }} onSubmit={handleSubmitPost}>
      <label>제목 : </label>
      <input type="text" placeholder="제목 입력" value={title} onChange={onChangeTitle} />
      <label>내용 : </label>
      <input type="text" placeholder="내용 입력" value={body} onChange={onChangeBody} />
      <label>카테고리 : </label>
      <input type="text" placeholder="카테고리 입력" value={category} onChange={onChangeCategory} />
      <button>등록</button>
    </form>
  );
};

export default Write;
