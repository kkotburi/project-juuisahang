import React, { useState, useRef } from 'react';
import { St } from './MyPostStyle';
import { useQuery } from 'react-query';
import { getMyPosts, getMyLikes } from 'api/myPost';
import dayjs from 'dayjs';
import { getProfile } from 'api/profile';

const MyPost = () => {
  const listRef = useRef();
  const [content, setContent] = useState('');

  const { data: member } = useQuery('members', getProfile, {
    refetchOnWindowFocus: false
  });

  const { data, isLoading, error } = useQuery('posts', getMyPosts, {
    refetchOnWindowFocus: false
  });

  const likes = useQuery('likes', getMyLikes, {
    refetchOnWindowFocus: false
  });

  const myPostList = () => {
    setContent(
      <div>
        {data.map((post) => (
          <div key={post.id}>
            <St.PostLink to={`/detail/${post.id}`}>
              <St.Lists>
                <St.ListDate>{dayjs(post.created_at).locale('kr').format('YYYY-MM-DD')}</St.ListDate>
                <St.ListTitle>{post.title}</St.ListTitle>
                <St.ListLike>{post.likes.length}</St.ListLike>
                <St.ListProfileImgBox>
                  <St.ListProfileImg alt="이미지 준비중" src={member.user_metadata.profileImg}></St.ListProfileImg>
                </St.ListProfileImgBox>
                <St.ListWriter>{member.user_metadata.nickname}</St.ListWriter>
              </St.Lists>
            </St.PostLink>
          </div>
        ))}
      </div>
    );
  };

  const myLikePostList = () => {
    setContent(
      <div>
        {likes.data.map((post) => (
          <div key={post.id}>
            <St.PostLink to={`/detail/${post.id}`}>
              <St.Lists>
                <St.ListDate>{dayjs(post.created_at).locale('kr').format('YYYY-MM-DD')}</St.ListDate>
                <St.ListTitle>{post.title}</St.ListTitle>
                <St.ListLike>{post.likes.length}</St.ListLike>
                <St.ListProfileImgBox>
                  <St.ListProfileImg alt="이미지 준비중" src={member.user_metadata.profileImg}></St.ListProfileImg>
                </St.ListProfileImgBox>
                <St.ListWriter>{member.user_metadata.nickname}</St.ListWriter>
              </St.Lists>
            </St.PostLink>
          </div>
        ))}
      </div>
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <St.MyPostContainer>
      <St.PostList>
        <St.MyPost onClick={myPostList}>내가 쓴 글</St.MyPost>
        <St.MyLikePostList onClick={myLikePostList}>좋아요 목록</St.MyLikePostList>
      </St.PostList>
      <St.ListBox ref={listRef}>{content}</St.ListBox>
    </St.MyPostContainer>
  );
};

export default MyPost;
