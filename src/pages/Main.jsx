import React from 'react';
import RecommendDrink from 'components/main/RecommendDrink';
import PopularPosts from 'components/main/PopularPosts';
import { useUserStore } from 'store';
import { styled } from 'styled-components';

const Main = () => {
  const currentUser = useUserStore((state) => state.currentUser);
  console.log(currentUser);

  return (
    <MainContainer>
      <RecommendDrink />
      <PopularPosts />
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
