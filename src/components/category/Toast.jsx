import React from 'react';
import { useQuery } from 'react-query';
import { getPosts } from 'api/posts';

const Toast = ({ code }) => {
  const { isLoading, isError, data } = useQuery('posts', getPosts);

  if (isLoading) {
    return <p>Loading…</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  const posts = data.data;
  const categoryPosts = posts.filter((post) => post.code === code);

  return (
    <div>
      Toast
      {categoryPosts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default Toast;
