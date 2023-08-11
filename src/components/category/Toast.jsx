import React from 'react';
import { St } from './CategoryStyle';

const Toast = ({ code, posts }) => {
  const categoryPosts = posts.filter((post) => post.category === code);

  return (
    <div>
      <St.CategoryHeader>
        <St.CategotyTitle>건배사</St.CategotyTitle>
        <St.CategorySubTitle>모두에 앞에서 센스쟁이가 될 수 있는 재밌는 건배사를 공유해주세요 !</St.CategorySubTitle>
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

export default Toast;
