import { styled } from 'styled-components';

export const St = {
  Test: styled.div``,
  RecommendContainer: styled.div`
    width: 1200px;
    height: 400px;

    margin: 100px 0px;
    background-color: white;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,

  MoodContainer: styled.div`
    background-color: antiquewhite;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  `,

  MoodImg: styled.img`
    width: 200px;
    height: auto;
  `
};
