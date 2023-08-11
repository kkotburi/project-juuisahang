import React from 'react';
import { St } from './CategoryStyle';
import dayjs from 'dayjs';
import { FaGlassCheers } from 'react-icons/fa';

const Tip = ({ code, posts }) => {
  const categoryPosts = posts.filter((post) => post.category === code);

  return (
    <div>
      <St.CategoryHeader>
        <St.CategotyTitle>술자리 팁</St.CategotyTitle>
        <St.CategorySubTitle>나만이 알고있는 술자리 팁을 공유해주세요 !</St.CategorySubTitle>
      </St.CategoryHeader>
      <St.WriteBtn>글 작성하기</St.WriteBtn>
      {categoryPosts.map((post) => (
        <St.PostList>
          <St.PostTime>{dayjs(post.created_at).format('YYYY-MM-DD')}</St.PostTime>
          <St.PostTitle key={post.id}>{post.title}</St.PostTitle>
          <St.PostRight>
            <St.ListLikeBox>
              <FaGlassCheers size="25" color="#eea100" />
              <p>{post.likes.length}</p>
            </St.ListLikeBox>
            <St.PostUser>{post.nickname}</St.PostUser>
          </St.PostRight>
        </St.PostList>
      ))}
    </div>
  );
};

export default Tip;
