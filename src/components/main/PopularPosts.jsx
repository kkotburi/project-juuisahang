import React, { useEffect, useState } from 'react';
import supabase from 'lib/supabaseClient';
import { useQuery } from 'react-query';
import { getPosts } from 'api/main';

const PopularPosts = () => {
  // supabase
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data, error } = await supabase.from('posts').select();

      if (error) {
        console.log(error);
      }

      if (data) {
        setPosts(data);
      }
    };

    getPosts();
  }, []);

  // react-query
  // const { isLoading, isError, data } = useQuery('posts', getPosts);

  // if (isLoading) {
  //   return <p>Loading…</p>;
  // }

  // if (isError) {
  //   return <p>Error</p>;
  // }

  // const posts = data.data;

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
