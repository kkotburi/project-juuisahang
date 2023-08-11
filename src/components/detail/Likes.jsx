import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getDetail } from 'api/post';
import { useUserStore } from 'store';
import usePost from 'hooks/usePost';
import { HeartOutlined, HeartFilled, LikeOutlined, LikeFilled } from '@ant-design/icons';
import { styled } from 'styled-components';

const Like = () => {
  const params = useParams();

  const currentUser = useUserStore((state) => state.currentUser);

  const { data: posts, isLoading, isError } = useQuery('likes', () => getDetail(params.postId));
  const { updateLikesMutation } = usePost();
  // console.log(posts[0].likes);

  const handleUpdateLikes = () => {
    if (!posts[0].likes.includes(currentUser?.uid) && currentUser) {
      const updateLikesUser = {
        ...posts[0],
        likes: [...posts[0].likes, currentUser?.uid]
      };
      updateLikesMutation.mutate(updateLikesUser);
    } else {
      const updateLikesUser = {
        ...posts[0],
        likes: posts[0].likes.filter((userId) => userId !== currentUser?.uid)
      };
      updateLikesMutation.mutate(updateLikesUser);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <LikesButtonBox>
      {posts[0].likes.includes(currentUser?.uid) ? (
        <LikesFillIcon onClick={handleUpdateLikes} />
      ) : (
        <LikesIcon onClick={handleUpdateLikes} />
      )}
      {posts[0].likes.length ? posts[0].likes.length : 0}
    </LikesButtonBox>
  );
};

export default Like;

const LikesButtonBox = styled.div`
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #cfcfcfdb;
  border-radius: 10px;
  margin-left: 20px;
  padding: 10px 2px;
`;

const LikesFillIcon = styled(LikeFilled)`
  font-size: 28px;
  margin-bottom: 3px;
  cursor: pointer;
`;

const LikesIcon = styled(LikeOutlined)`
  font-size: 28px;
  margin-bottom: 3px;
  cursor: pointer;
`;
