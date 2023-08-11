import React, { useEffect, useState } from 'react';
import supabase from 'lib/supabaseClient';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PopularPosts = () => {
  const navigate = useNavigate();

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

  const popularPosts = posts.sort((a, b) => b.like - a.like).slice(0, 2);

  return (
    <PopularContainer>
      <div>Popularity</div>
      {popularPosts.map((post) => {
        console.log('요거', post);
        return (
          <PopularPost
            key={post.id}
            onClick={() => {
              navigate(`/detail/${post.id}`);
            }}
          >
            <div>{post.created_at}</div>
            <div>{post.category}</div>
            <div>{post.title}</div>
            <div>{post.likes.length}</div>
            <div>{post.userId}</div>
          </PopularPost>
        );
      })}
    </PopularContainer>
  );
};

export default PopularPosts;

const PopularContainer = styled.div`
  background-color: blueviolet;

  width: 1200px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const PopularPost = styled.div`
  background-color: aliceblue;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
