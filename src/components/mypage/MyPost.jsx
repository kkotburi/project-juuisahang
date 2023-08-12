import React, { useState } from 'react';
import { St } from './MyPostStyle';
import { useQuery } from 'react-query';
import { getMyPosts, getMyLikes } from 'api/myPost';
import dayjs from 'dayjs';
import { FaGlassCheers } from 'react-icons/fa';
import { getProfile } from 'api/profile';

const PAGE_SIZE = 5;

const MyPost = () => {
  const [activeTab, setActiveTab] = useState('myPosts');
  const [currentPageMyPosts, setCurrentPageMyPosts] = useState(0);
  const [currentPageLikedPosts, setCurrentPageLikedPosts] = useState(0);
  const [activeMember, setActiveMember] = useState({});

  const {
    data: myPostsData,
    isLoading: myPostsLoading,
    error: myPostsError,
    refetch: refetchMyPosts
  } = useQuery('posts', getMyPosts, {});

  const {
    data: likedPostsData,
    isLoading: likedPostsLoading,
    error: likedPostsError,
    refetch: refetchLikedPosts
  } = useQuery('likes', getMyLikes, {
    refetchOnWindowFocus: false
  });

  const { data: member } = useQuery('members', getProfile, {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setActiveMember(data);
    }
  });

  const handlePageChangeMyPosts = ({ selected }) => {
    setCurrentPageMyPosts(selected);
  };

  const handlePageChangeLikedPosts = ({ selected }) => {
    setCurrentPageLikedPosts(selected);
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
                    <St.ListProfileImg
                      alt="이미지 준비중"
                      src={
                        activeTab === 'myPosts'
                          ? activeMember.user_metadata && activeMember.user_metadata.profileImg
                          : post.profileImg
                      }
                    ></St.ListProfileImg>
                  </St.ListProfileImgBox>
                  <St.ListNickname>
                    {activeTab === 'myPosts'
                      ? activeMember.user_metadata && activeMember.user_metadata.nickname
                      : post.nickname}
                  </St.ListNickname>
                </St.ListWriterWrap>
              </St.Lists>
            </St.PostLink>
          </div>
        ))}
      </div>
    );
  };

  const handleMyPostsClick = () => {
    refetchMyPosts();
    setActiveTab('myPosts');
    setCurrentPageMyPosts(0);
  };

  const handleMyLikedPostsClick = () => {
    refetchLikedPosts();
    setActiveTab('likedPosts');
    setCurrentPageLikedPosts(0);
  };

  const renderContent = () => {
    let postsData, pageCount, currentPage, handlePageChange;
    let noPostsMessage = '';

    if (activeTab === 'myPosts') {
      postsData = myPostsData;
      currentPage = currentPageMyPosts;
      handlePageChange = handlePageChangeMyPosts;
      noPostsMessage = '작성된 글이 없습니다.';
    } else if (activeTab === 'likedPosts') {
      postsData = likedPostsData;
      currentPage = currentPageLikedPosts;
      handlePageChange = handlePageChangeLikedPosts;
      noPostsMessage = '건배한 글이 없습니다.';
    }

    if (postsData && postsData.length > 0) {
      const paginatedPosts = postsData.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE);
      pageCount = Math.ceil(postsData.length / PAGE_SIZE);
      return (
        <div>
          {renderPosts(paginatedPosts, member)}
          <St.PaginationBox>
            <St.Paginate
              previousLabel={''}
              nextLabel={''}
              breakLabel={'...'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              activeClassName={'active'}
              forcePage={currentPage}
            />
          </St.PaginationBox>
        </div>
      );
    }

    return <div>{noPostsMessage}</div>;
  };

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
        <St.ListBtn onClick={handleMyLikedPostsClick}>건배한 글</St.ListBtn>
      </St.PostList>
      <St.ListBox>{renderContent()}</St.ListBox>
    </St.MyPostContainer>
  );
};

export default MyPost;
