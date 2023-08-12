import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import supabase from 'lib/supabaseClient';
// components
import Tip from 'components/category/Tip';
import Toast from 'components/category/Toast';
import Game from 'components/category/Game';
import Hangover from 'components/category/Hangover';
import { useUserStore } from 'store';

const Category = () => {
  const { code } = useParams();
  const [posts, setPosts] = useState([]);

  const currentUser = useUserStore((state) => state.currentUser);

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

  return (
    <div>
      {code === '술자리 팁' && <Tip code={code} posts={posts} currentUser={currentUser} />}
      {code === '건배사' && <Toast code={code} posts={posts} currentUser={currentUser} />}
      {code === '술 게임' && <Game code={code} posts={posts} currentUser={currentUser} />}
      {code === '숙취해소법' && <Hangover code={code} posts={posts} currentUser={currentUser} />}
    </div>
  );
};

export default Category;
