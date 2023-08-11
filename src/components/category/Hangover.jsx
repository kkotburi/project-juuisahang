import React from 'react';
import { St } from './CategoryStyle';
import dayjs from 'dayjs';

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
          <St.PostTime>{dayjs(post.created_at).format('YYYY-MM-DD')}</St.PostTime>
          <St.PostTitle key={post.id}>{post.title}</St.PostTitle>
          <St.PostRight>
            <div>
              <St.Postlike>♥</St.Postlike>
              <span>13</span>
            </div>
            <St.PostUser>알쓰입니다</St.PostUser>
          </St.PostRight>
        </St.PostList>
      ))}
    </div>
  );
};

export default Hangover;
