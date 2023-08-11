import React from 'react';
import { St } from './CategoryStyle';

const Game = ({ code, posts }) => {
  const categoryPosts = posts.filter((post) => post.category === code);

  return (
    <div>
      <St.CategoryHeader>
        <St.CategotyTitle>술 게임</St.CategotyTitle>
        <St.CategorySubTitle>내가 알고있는 재밌는 술 게임을 공유해주세요 !</St.CategorySubTitle>
      </St.CategoryHeader>
      <St.WriteBtn>글 작성하기</St.WriteBtn>
      {categoryPosts.map((post) => (
        <St.PostList>
          <div key={post.id}>{post.title}</div>
        </St.PostList>
      ))}
    </div>
  );
};

export default Game;
