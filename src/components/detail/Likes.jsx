import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getDetail } from 'api/post';
import { useUserStore } from 'store';
import usePost from 'hooks/usePost';
import { FaGlassCheers } from 'react-icons/fa';
import { styled } from 'styled-components';

const Like = () => {
  const params = useParams();

  const currentUser = useUserStore((state) => state.currentUser);

  const { data: posts, isLoading, isError } = useQuery('likes', () => getDetail(params.postId));
  const { updateLikesMutation } = usePost();

  const handleUpdateLikes = (post) => {
    if (!post.likes.includes(currentUser?.uid) && currentUser) {
      const updateLikesUser = {
        ...post,
        likes: [...post.likes, currentUser?.uid]
      };
      updateLikesMutation.mutate(updateLikesUser);
    } else {
      const updateLikesUser = {
        ...post,
        likes: post.likes.filter((userId) => userId !== currentUser?.uid)
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
    <LikesContainer>
      {posts.map((post) => {
        return (
          <LikesButtonBox key={post.id}>
            {post.likes.includes(currentUser?.uid) ? (
              <FaGlassCheers size="32" color="#EEA100" onClick={() => handleUpdateLikes(post)} />
            ) : (
              <FaGlassCheers size="32" color="#000000" onClick={() => handleUpdateLikes(post)} />
            )}
            {post.likes.length ? post.likes.length : 0}
          </LikesButtonBox>
        );
      })}
    </LikesContainer>
  );
};

export default Like;

const LikesContainer = styled.div``;

const LikesButtonBox = styled.div`
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: #cfcfcfdb; */
  border-radius: 10px;
  margin-left: 20px;
  /* padding: 10px 23px; */
`;
