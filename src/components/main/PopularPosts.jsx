import React, { useEffect, useState } from 'react';
import supabase from 'lib/supabaseClient';

const PopularPosts = () => {
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

  console.log(posts);
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
