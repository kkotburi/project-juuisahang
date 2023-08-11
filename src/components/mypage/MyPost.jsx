import React, { useState, useRef } from 'react';
import { St } from './MyPostStyle';
import { useQuery } from 'react-query';
import { getMyPosts, getMyLikes } from 'api/myPost';
import dayjs from 'dayjs';
import { getProfile } from 'api/profile';
import { FaGlassCheers } from 'react-icons/fa';

const MyPost = () => {
  const listRef = useRef();

  const { data: member } = useQuery('members', getProfile, {
    refetchOnWindowFocus: false
  });

  const {
    data: myPostsData,
    isLoading: myPostsLoading,
    error: myPostsError
  } = useQuery('posts', getMyPosts, {
    refetchOnWindowFocus: false
  });

  const {
    data: likedPostsData,
    isLoading: likedPostsLoading,
    error: likedPostsError
  } = useQuery('likes', getMyLikes, {
    refetchOnWindowFocus: false
  });

  const [activeContent, setActiveContent] = useState('myPosts');

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
                <St.ListTitle>{post.title}</St.ListTitle>
                <St.ListWriterWrap>
                  <St.ListLikeBox>
                    <FaGlassCheers size="25" color="#eea100" />
                    <p>{post.likes.length}</p>
                  </St.ListLikeBox>
                  <St.ListProfileImgBox>
                    <St.ListProfileImg alt="이미지 준비중" src={member.user_metadata.profileImg}></St.ListProfileImg>
                  </St.ListProfileImgBox>
                  <St.ListNickname>{member.user_metadata.nickname}</St.ListNickname>
                </St.ListWriterWrap>
              </St.Lists>
            </St.PostLink>
          </div>
        ))}
      </div>
    );
  };

  const handleMyPostsClick = () => {
    setActiveContent('myPosts');
  };

  const handleMyLikedPostsClick = () => {
    setActiveContent('likedPosts');
  };

  let content = null;
  if (activeContent === 'myPosts') {
    content = renderPosts(myPostsData);
  } else if (activeContent === 'likedPosts') {
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
        <St.ListBtn active={activeContent === 'myPosts'} onClick={handleMyPostsClick}>
          내가 쓴 글
        </St.ListBtn>
        <St.ListBtn active={activeContent === 'likedPosts'} onClick={handleMyLikedPostsClick}>
          좋아요 목록
        </St.ListBtn>
      </St.PostList>
      <St.ListBox ref={listRef}>{content}</St.ListBox>
    </St.MyPostContainer>
  );
};

export default MyPost;
