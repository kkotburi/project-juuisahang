import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getComments, deleteComment, updateComment, AddComment } from 'api/comment';
import { useUserStore } from 'store';
import { useParams } from 'react-router-dom/dist';
import { styled } from 'styled-components';
import dayjs from 'dayjs';

const Comments = () => {
  const currentUser = useUserStore((state) => state.currentUser);
  const params = useParams();

  const queryQlient = useQueryClient();
  const { data: comments, isLoading, error } = useQuery('comments', getComments);

  const deleteMutation = useMutation(deleteComment, {
    onSuccess: () => {
      queryQlient.invalidateQueries('comments');
    }
  });

  const updateMutation = useMutation(updateComment, {
    onSuccess: () => {
      queryQlient.invalidateQueries('comments');
    }
  });

  const insertMutation = useMutation(AddComment, {
    onSuccess: () => {
      queryQlient.invalidateQueries('comments');
    }
  });

  const [body, setBody] = useState('');

  const handleDeleteComment = (id) => {
    deleteMutation.mutate(id);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();

    if (!body) {
      return alert('내용을 입력해주세요');
    }
    const newComment = {
      userId: currentUser.uid,
      nickname: currentUser.nickname,
      profileImg: currentUser.profileImg,
      body,
      postId: params.postId
    };
    insertMutation.mutate(newComment);

    setBody('');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <CommentsTitle>댓글</CommentsTitle>
      <CommentsAddForm onSubmit={handleSubmitComment}>
        <CommentsTextarea
          type="text"
          id="body"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <CommentsAddButton>등록</CommentsAddButton>
      </CommentsAddForm>
      <div>
        {comments
          .filter((comment) => comment.postId === params.postId)
          .map((comment) => (
            <CommentsBox key={comment.id}>
              <CommentsUserInfoBox>
                <CommentsUserProfileImg src={comment.profileImg} />
                <CommentsUserNickname>{comment.nickname}</CommentsUserNickname>
              </CommentsUserInfoBox>
              <CommentsContentsBox>
                <CommentsDate>{dayjs(comment.created_at).locale('kr').format(`YYYY-MM-DD HH:mm`)}</CommentsDate>
                <CommentsBody>{comment.body}</CommentsBody>
              </CommentsContentsBox>
              {comment.userId === currentUser.uid && (
                <CommentsDeleteButton onClick={() => handleDeleteComment(comment.id)}>삭제</CommentsDeleteButton>
              )}
            </CommentsBox>
          ))}
      </div>
    </div>
  );
};

export default Comments;

const CommentsTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const CommentsAddForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const CommentsTextarea = styled.textarea`
  width: 90%;
  border-radius: 10px;
  margin-right: 20px;
  padding: 10px;
`;

const CommentsAddButton = styled.button`
  font-size: 16px;
  color: #ffffff;
  background-color: #e24c4b;
  border: none;
  border-radius: 15px;
  padding: 7px 20px;
  cursor: pointer;

  &:hover {
    background-color: #bb3535;
  }
`;

const CommentsBox = styled.div`
  position: relative;
  display: flex;
  border-bottom: 1px solid #989898;
  padding: 15px 20px;
`;

const CommentsUserInfoBox = styled.div`
  width: 60px;
`;

const CommentsUserProfileImg = styled.img`
  max-width: 40px;
  max-height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 3px;
`;

const CommentsUserNickname = styled.div`
  font-size: 14px;
`;

const CommentsContentsBox = styled.div`
  width: 90%;
  padding: 10px 20px;
`;

const CommentsDate = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

const CommentsBody = styled.div`
  width: 93%;
  word-wrap: break-word;
`;

const CommentsDeleteButton = styled.button`
  position: absolute;
  top: 40%;
  right: 2%;
  height: 26px;
  font-size: 14px;
  color: #ffffff;
  background-color: #515151;
  border: none;
  border-radius: 10px;
  padding: 3px 10px;
  cursor: pointer;

  &:hover {
    background-color: #343434;
  }
`;
