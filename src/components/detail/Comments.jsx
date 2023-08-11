import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getComments, deleteComment, updateComment, AddComment } from 'api/comment';
import { useUserStore } from 'store';

const Comments = () => {
  const currentUser = useUserStore((state) => state.currentUser);

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

  const [name, setName] = useState('');
  const [body, setBody] = useState('');

  const handleDeleteComment = (id) => {
    deleteMutation.mutate(id);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();

    if (!name || !body) {
      return alert('내용을 입력해주세요');
    }
    const newComment = {
      userId: currentUser.uid,
      name,
      body
    };
    insertMutation.mutate(newComment);

    setName('');
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
      <div className="page add">
        <form onSubmit={handleSubmitComment}>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
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
        {comments.map((comment) => (
          <div
            className="comment-card"
            style={{
              border: '2px solid black',
              margin: '10px',
              padding: '10px'
            }}
          >
            <h3>이름 : {comment.name}</h3>
            <p>내용 : {comment.body}</p>
            <button onClick={() => handleDeleteComment(comment.id)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
