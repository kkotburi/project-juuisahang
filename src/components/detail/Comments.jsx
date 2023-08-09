import React, { useState, useEffect } from 'react';
import supabase from 'lib/supabaseClient';
import CommentCard from 'components/detail/CommentCard';

const Comments = () => {
  console.log(supabase);
  const [fetchError, setFetchError] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase.from('comments').select();

      if (error) {
        setFetchError('Could not fetch the comments');
        setComments(null);
        console.log(error);
      }
      if (data) {
        setComments(data);
        setFetchError(null);
      }

      console.log();
    };

    fetchComments(comments);
  }, []);

  return (
    <div className="comment section">
      {fetchError && <p>{fetchError}</p>}
      {comments && (
        <div className="comments">
          {comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
