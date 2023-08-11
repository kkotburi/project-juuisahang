import React from 'react';
import { St } from './CategoryStyle';

const Hangover = ({ code, posts }) => {
  const categoryPosts = posts.filter((post) => post.category === code);

  return (
    <div>
      <St.CategoryHeader>
        <St.CategotyTitle>숙취해소법</St.CategotyTitle>
        <St.CategorySubTitle>알고있는 최고의 숙취해소법을 공유해주세요 !</St.CategorySubTitle>
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

export default Hangover;
