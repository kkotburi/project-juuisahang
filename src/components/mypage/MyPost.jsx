import React, { useState } from 'react';
import { useRef } from 'react';
import { St } from './MyPostStyle';

const MyPost = () => {
  const listRef = useRef();
  const [content, setContent] = useState('');

  const myPostList = () => {
    setContent(
      <div>
        <p>내가 쓴 글 1</p>
        <p>내가 쓴 글 2</p>
      </div>
    );
  };

  const myLikePostList = () => {
    setContent(
      <div>
        <p>좋아요한 글 1</p>
        <p>좋아요한 글 2</p>
      </div>
    );
  };

  return (
    <St.MyPostContainer>
      <St.PostList>
        <St.MyPost onClick={myPostList}>내가 쓴 글</St.MyPost>
        <St.LikeList onClick={myLikePostList}>좋아요 목록</St.LikeList>
      </St.PostList>
      <div
        style={{ border: '2px solid gray', width: '1000px', height: '400px', padding: '10px', marginTop: '15px' }}
        ref={listRef}
      >
        {content}
      </div>
    </St.MyPostContainer>
  );
};

export default MyPost;
