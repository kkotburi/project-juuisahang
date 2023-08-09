import React from 'react';
import { useQuery } from 'react-query';
import { getPosts } from 'api/posts';

const PopularPosts = () => {
  const { isLoading, isError, data } = useQuery('posts', getPosts);

  if (isLoading) {
    return <p>Loading…</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  const posts = data.data;
  const popularPosts = posts.sort((a, b) => b.like - a.like).slice(0, 2);

  return (
    <div>
      <div>Popularity</div>
      {popularPosts.map((post) => {
        return (
          <div key={post.id}>
            <div>{post.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PopularPosts;
