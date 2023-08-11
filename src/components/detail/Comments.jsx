import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getComments, deleteComment, updateComment, AddComment } from 'api/comment';
import { useUserStore } from 'store';
import { useParams } from 'react-router-dom/dist';

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
      댓글
      <div className="page add">
        <form onSubmit={handleSubmitComment}>
          <label htmlFor="body">Body :</label>
          <textarea
            type="text"
            id="body"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
      <div className="comments">
        {comments
          .filter((comment) => comment.postId === params.postId)
          .map((comment) => (
            <div
              className="comment-card"
              style={{
                border: '2px solid black',
                margin: '10px',
                padding: '10px'
              }}
            >
              <p>내용 : {comment.body}</p>
              <button onClick={() => handleDeleteComment(comment.id)}>삭제</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comments;
