import supabase from 'lib/supabaseClient';

const CommentCard = ({ comment }) => {
  const handleDelete = async () => {
    const { data, error } = await supabase.from('comments').delete().eq('id', comment.id);

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
    }
  };

  return (
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
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};
export default CommentCard;
