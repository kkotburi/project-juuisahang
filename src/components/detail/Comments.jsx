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

  // const updateMutation = useMutation(updateComment, {
  //   onSuccess: () => {
  //     queryQlient.invalidateQueries('comments');
  //   }
  // });

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
            <CommentsBox>
              <p>{dayjs(comment.created_at).locale('kr').format(`YYYY-MM-DD HH:mm`)}</p>
              <p>{comment.body}</p>
              {comment.userId === currentUser.uid && (
                <button onClick={() => handleDeleteComment(comment.id)}>삭제</button>
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
  border-bottom: 1px solid black;
  padding: 20px;
`;
