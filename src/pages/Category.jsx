import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import supabase from 'lib/supabaseClient';
import { useQuery } from 'react-query';
import { getPosts } from 'api/main';
// components
import Tip from 'components/category/Tip';
import Toast from 'components/category/Toast';
import Game from 'components/category/Game';
import Hangover from 'components/category/Hangover';

const Category = () => {
  const { code } = useParams();

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

  return (
    <div>
      {code === '술자리 팁' && <Tip code={code} posts={posts} />}
      {code === '건배사' && <Toast code={code} posts={posts} />}
      {code === '술 게임' && <Game code={code} posts={posts} />}
      {code === '숙취해소법' && <Hangover code={code} posts={posts} />}
    </div>
  );
};

export default Category;
