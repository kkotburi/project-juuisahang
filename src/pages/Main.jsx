import React from 'react';
import RecommendDrink from 'components/main/RecommendDrink';
import PopularPosts from 'components/main/PopularPosts';
import { useUserStore } from 'store';

const Main = () => {
  const currentUser = useUserStore((state) => state.currentUser);
  console.log(currentUser);

  return (
    <div>
      <RecommendDrink />
      <PopularPosts />
    </div>
  );
};

export default Main;
