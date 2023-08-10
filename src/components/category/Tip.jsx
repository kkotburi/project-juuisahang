import React from 'react';

const Tip = ({ code, posts }) => {
  const categoryPosts = posts.filter((post) => post.category === code);

  return (
    <div>
      Tip
      {categoryPosts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default Tip;
