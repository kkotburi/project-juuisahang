import React, { useState, useRef } from 'react';
import { St } from './MyPostStyle';
import { useQuery } from 'react-query';
import { getMyPosts, getMyLikes } from 'api/myPost';
import dayjs from 'dayjs';
import { FaGlassCheers } from 'react-icons/fa';

const PAGE_SIZE = 4;

const MyPost = () => {
  const listRef = useRef();
  const [myPostsActive, setMyPostsActive] = useState(true);
  const [likedPostsActive, setLikedPostsActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const { data: myPostsData, isLoading: myPostsLoading, error: myPostsError } = useQuery('posts', getMyPosts);

  const {
    data: likedPostsData,
    isLoading: likedPostsLoading,
    error: likedPostsError
  } = useQuery('likes', getMyLikes, {
    refetchOnWindowFocus: false
  });

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

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
  let pageCount = 1;
  if (myPostsActive) {
    if (myPostsData) {
      const paginatedPosts = myPostsData.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE);
      content = renderPosts(paginatedPosts);
      pageCount = Math.ceil(myPostsData.length / PAGE_SIZE);
    }
  } else if (likedPostsActive) {
    if (likedPostsData) {
      const paginatedLikedPosts = likedPostsData.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE);
      content = renderPosts(paginatedLikedPosts);
      pageCount = Math.ceil(likedPostsData.length / PAGE_SIZE);
    }
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
      <St.Paginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={4}
        onPageChange={handlePageChange}
        activeClassName={'active'}
      />
    </St.MyPostContainer>
  );
};

export default MyPost;
