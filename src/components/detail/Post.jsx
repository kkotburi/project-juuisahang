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
import EditorContents from 'components/write/EditorContents';
import WriteContents from 'components/write/WriteContents';

const Post = () => {
  const params = useParams();

  const currentUser = useUserStore((state) => state.currentUser);

  const { data: posts, isLoading, isError } = useQuery('posts', () => getDetail(params.postId));
  const { deleteMutation, updateMutation } = usePost();

  const [title, onChangeTitle, setTitle] = useInput();
  const [body, onChangeBody, setBody] = useInput();
  // const [category, onChangeCategory, setCategory] = useInput();
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
            {currentUser.uid === post.userId && (
              <PostButtonBox>
                <PostButton onClick={() => handleUpdatePost(post)}>{isEdit ? '저장' : '수정'}</PostButton>
                <PostButton onClick={() => handleDeletePost(post.id)}>삭제</PostButton>
              </PostButtonBox>
            )}
            <PostTitleBox>
              {!isEdit && (
                <>
                  <PostTitle>{post.title}</PostTitle>
                  <div>{post.created_at}</div>
                </>
              )}
            </PostTitleBox>
            {isEdit ? (
              <>
                <WriteContents title={title} onChangeTitle={onChangeTitle} />
                <EditorContents body={body} setBody={setBody} />
              </>
            ) : (
              <>
                <PostBody>
                  <Viewer initialValue={post.body} />
                </PostBody>
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
              </>
            )}
          </div>
        );
      })}
    </PostContainer>
  );
};

export default Post;

const PostContainer = styled.div`
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

  &:hover {
    font-weight: 600;
  }
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

const PostBody = styled.div`
  padding: 10px 20px;
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
