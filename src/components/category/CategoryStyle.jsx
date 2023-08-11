import Category from 'pages/Category';
import { styled } from 'styled-components';

export const St = {
  CategoryHeader: styled.div`
    width: 90%;
    height: 120px;
    background-color: #545b77;
    border-radius: 8px;
    margin: 20px auto;
    padding-left: 50px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-evenly;
  `,
  CategotyTitle: styled.div`
    color: white;
    font-size: 26px;
    font-weight: bold;
  `,
  CategorySubTitle: styled.div`
    color: whitesmoke;
    font-size: 18px;
    padding-left: 10px;
  `,
  WriteBtn: styled.div`
    color: white;
    background-color: #e24c4b;
    width: 85%;
    height: 45px;
    border-radius: 8px;
    margin: 40px auto 50px auto;
    font-weight: bolder;
    //padding-left: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  PostList: styled.div`
    border: 1px solid black;
    width: 88%;
    height: 60px;
    border-radius: 8px;
    margin: 10px auto 10px auto;
    display: flex;
    align-items: center;
  `,
  PostTime: styled.div`
    font-size: 13px;
    font-weight: bold;
    padding-left: 15px;
    padding-right: 15px;
  `,
  PostTitle: styled.div`
    font-size: 18px;
    font-weight: 800;
  `,
  PostRight: styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
  `,
  Postlike: styled.div`
    font-size: 20px;
    color: red;
  `,
  PostUser: styled.div`
    margin: auto 15px;
  `
};
