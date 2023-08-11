import React, { useState } from 'react';
import { useUserStore } from 'store';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getDetail } from 'api/post';
import usePost from 'hooks/usePost';
import useInput from 'hooks/useInput';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
// import dayjs from 'dayjs';
// import 'dayjs/locale/ko';
import Share from './Share';
import Likes from './Likes';
import { styled } from 'styled-components';

const Post = () => {
  const params = useParams();

  const currentUser = useUserStore((state) => state.currentUser);

  const { data: posts, isLoading, isError } = useQuery('posts', () => getDetail(params.postId));
  const { deleteMutation, updateMutation } = usePost();

  const [title, handleOnChangeTitle, setTitle] = useInput();
  const [body, handleOnChangeBody, setBody] = useInput();
  const [isEdit, setIsEdit] = useState(false);

  console.log(posts);

  const handleDeletePost = (id) => {
    deleteMutation.mutate(id);
  };

  const handleUpdatePost = (post) => {
    if (!isEdit) {
      setIsEdit(true);
      setTitle(post.title);
      setBody(post.body);
    } else {
      const editedPost = {
        ...post,
        title,
        body
      };
      updateMutation.mutate(editedPost);
      setIsEdit(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <PostContainer>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            {' '}
            <PostTitleBox>
              <PostButtonBox>
                <PostButton onClick={() => handleUpdatePost(post)}>{isEdit ? '저장' : '수정'}</PostButton>
                {/* <div> | </div> */}
                <PostButton onClick={() => handleDeletePost(post.id)}>삭제</PostButton>
              </PostButtonBox>
              <div>
                <div>
                  {isEdit ? (
                    <textarea type="text" placeholder="제목 입력" value={title} onChange={handleOnChangeTitle} />
                  ) : (
                    <PostTitle>{post.title}</PostTitle>
                  )}
                </div>
                <div>{post.created_at}</div>
              </div>
            </PostTitleBox>
            {isEdit ? (
              <textarea type="text" placeholder="내용 입력" value={body} onChange={handleOnChangeBody} />
            ) : (
              <Viewer initialValue={post.body} />
            )}
            <PostBottomBox>
              <PostUserBox>
                <PostUserProfileImg src={currentUser?.profileImg} />
                {currentUser?.nickname}
              </PostUserBox>
              <PostShareLikeBox>
                <Share />
                <Likes />
              </PostShareLikeBox>
            </PostBottomBox>
          </div>
        );
      })}
    </PostContainer>
  );
};

export default Post;

const PostContainer = styled.div`
  /* width: 100%; */
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  background-color: #ffffff;
  border-radius: 15px;
  margin: 30px 0;
  padding: 20px 30px;
`;

const PostButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const PostButton = styled.button`
  font-size: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const PostTitleBox = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: 20px;
`;

const PostTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const PostBottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const PostUserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const PostUserProfileImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
`;

const PostShareLikeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
