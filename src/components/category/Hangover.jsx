import React from 'react';

const Hangover = ({ code, posts }) => {
  const categoryPosts = posts.filter((post) => post.category === code);

  return (
    <div>
      Hangover
      {categoryPosts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default Hangover;
