import React, { useState, useRef } from 'react';
import { St } from './MyPostStyle';
import { useQuery } from 'react-query';
import { getMyPosts, getMyLikes } from 'api/myPost';
import dayjs from 'dayjs';
import { FaGlassCheers } from 'react-icons/fa';

const MyPost = () => {
  const listRef = useRef();

  const {
    data: myPostsData,
    isLoading: myPostsLoading,
    error: myPostsError
  } = useQuery('posts', getMyPosts, {
    // refetchOnWindowFocus: false
  });

  const {
    data: likedPostsData,
    isLoading: likedPostsLoading,
    error: likedPostsError
  } = useQuery('likes', getMyLikes, {
    refetchOnWindowFocus: false
  });

  const [myPostsActive, setMyPostsActive] = useState(true);
  const [likedPostsActive, setLikedPostsActive] = useState(false);

  const renderPosts = (posts) => {
    if (!posts) {
      return <div>No posts available.</div>;
    }
    const sortedPosts = posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    return (
      <div>
        {sortedPosts.map((post) => (
          <div key={post.id}>
            <St.PostLink to={`/detail/${post.id}`}>
              <St.Lists>
                <St.ListDate>{dayjs(post.created_at).locale('kr').format('YYYY-MM-DD')}</St.ListDate>
                <St.ListTitleBox>
                  <St.ListCategory>{post.category}</St.ListCategory>
                  <St.ListTitle>{post.title}</St.ListTitle>
                </St.ListTitleBox>
                <St.ListWriterWrap>
                  <St.ListLikeBox>
                    <FaGlassCheers size="25" color="#eea100" />
                    <p>{post.likes.length}</p>
                  </St.ListLikeBox>
                  <St.ListProfileImgBox>
                    <St.ListProfileImg alt="이미지 준비중" src={post.profileImg}></St.ListProfileImg>
                  </St.ListProfileImgBox>
                  <St.ListNickname>{post.nickname}</St.ListNickname>
                </St.ListWriterWrap>
              </St.Lists>
            </St.PostLink>
          </div>
        ))}
      </div>
    );
  };

  const handleMyPostsClick = () => {
    setMyPostsActive(true);
    setLikedPostsActive(false);
  };

  const handleMyLikedPostsClick = () => {
    setMyPostsActive(false);
    setLikedPostsActive(true);
  };

  let content = null;
  if (myPostsActive) {
    content = renderPosts(myPostsData);
  } else if (likedPostsActive) {
    content = renderPosts(likedPostsData);
  }

  if (myPostsLoading || likedPostsLoading) {
    return <div>Loading...</div>;
  }

  if (myPostsError || likedPostsError) {
    return <div>Error...</div>;
  }

  return (
    <St.MyPostContainer>
      <St.PostList>
        <St.ListBtn onClick={handleMyPostsClick} autoFocus>
          내가 쓴 글
        </St.ListBtn>
        <St.ListBtn onClick={handleMyLikedPostsClick}>좋아요 목록</St.ListBtn>
      </St.PostList>
      <St.ListBox ref={listRef}>{content}</St.ListBox>
    </St.MyPostContainer>
  );
};

export default MyPost;
