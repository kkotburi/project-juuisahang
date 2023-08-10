import { styled } from 'styled-components';

export const St = {
  MyPostContainer: styled.div`
    padding: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
  `,
  PostList: styled.div`
    display: flex;
    gap: 20px;
    cursor: pointer;
  `,
  MyPost: styled.span`
    &:hover {
      font-weight: 600;
    }
  `,
  LikeList: styled.span`
    &:hover {
      font-weight: 600;
    }
  `
};
