import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getComments, deleteComment, updateComment, AddComment } from 'api/comment';
import { useUserStore } from 'store';
import { useParams } from 'react-router-dom/dist';
import dayjs from 'dayjs';
import { St } from './CommentsStyle';

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
      <St.CommentsTitle>댓글</St.CommentsTitle>
      <St.CommentsAddForm onSubmit={handleSubmitComment}>
        <St.CommentsTextarea
          type="text"
          id="body"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <St.CommentsAddButton>등록</St.CommentsAddButton>
      </St.CommentsAddForm>
      <div>
        {comments
          .filter((comment) => comment.postId === params.postId)
          .map((comment) => (
            <St.CommentsBox key={comment.id}>
              <St.CommentsUserInfoBox>
                <St.CommentsImageBox>
                  <St.CommentsUserProfileImg src={comment.profileImg} />
                </St.CommentsImageBox>
                <St.CommentsUserNickname>{comment.nickname}</St.CommentsUserNickname>
              </St.CommentsUserInfoBox>
              <St.CommentsContentsBox>
                <St.CommentsDate>{dayjs(comment.created_at).locale('kr').format(`YYYY-MM-DD HH:mm`)}</St.CommentsDate>
                <St.CommentsBody>{comment.body}</St.CommentsBody>
              </St.CommentsContentsBox>
              {comment.userId === currentUser.uid && (
                <St.CommentsDeleteButton onClick={() => handleDeleteComment(comment.id)}>삭제</St.CommentsDeleteButton>
              )}
            </St.CommentsBox>
          ))}
      </div>
    </div>
  );
};

export default Comments;
