import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const St = {
  Test: styled.div``,

  HeaderContainer: styled.header`
    height: 100px;
    background-color: white;
    border-bottom: solid 1px #969696;

    display: flex;
    align-items: center;
    justify-content: center;
  `,

  HeaderLogoImg: styled.img`
    /* background-color: black; */

    width: auto;
    height: 80px;

    cursor: pointer;
  `,

  CategoryWrapper: styled.div`
    /* background-color: yellow; */

    width: 1000px;

    justify-content: center;
    display: grid;
    grid-template-columns: repeat(4, auto);
  `,

  CategoryLink: styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 18px;

    margin: 0px 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    &:hover {
      font-weight: 900;
    }
  `,
  AuthContainder: styled.div`
    /* background-color: pink; */

    width: 100px;
  `,

  LoginLink: styled(Link)`
    background-color: red;

    text-decoration: none;
    color: black;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    &:hover {
      font-weight: 900;
    }
  `
};
