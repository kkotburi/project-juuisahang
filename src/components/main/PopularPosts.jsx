import React, { useEffect, useState } from 'react';
import supabase from 'lib/supabaseClient';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { FaGlassCheers } from 'react-icons/fa';

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

  const popularPosts = posts.sort((a, b) => b.likes.length - a.likes.length).slice(0, 2);

  return (
    <PopularContainer>
      <PopularTitle>Popularity</PopularTitle>
      {popularPosts.map((post) => {
        return (
          <PopularPost
            key={post.id}
            onClick={() => {
              navigate(`/detail/${post.id}`);
            }}
          >
            <div>{dayjs(post.created_at).locale('kr').format('YYYY-MM-DD')}</div>
            <div>
              <div>{post.category}</div>
              <div>{post.title}</div>
            </div>
            <div>
              <FaGlassCheers size="25" color="#eea100" />
              <div>{post.likes.length}</div>
            </div>
            <div>{post.nickname}</div>
            <img src={post.profileImg} />
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

const PopularTitle = styled.div`
  background-color: #a785c7;

  font-size: 20px;
  margin: 10px;
`;

const PopularPost = styled.div`
  background-color: aliceblue;

  width: 100%;
  height: 60px;
  margin: 10px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
