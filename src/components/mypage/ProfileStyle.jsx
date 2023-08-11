import { styled } from 'styled-components';

export const St = {
  PageContainer: styled.div`
    width: 100%;
    display: flex;
    margin-top: 1.5rem;
  `,
  ProfileWarp: styled.div`
    width: 30%;
    float: left;
    margin-top: 50px;
    box-sizing: border-box;
  `,

  MyPostWarp: styled.div`
    width: 70%;
    float: right;
    margin-top: 30px;
  `,

  ProfileImageBox: styled.div`
    width: 200px;
    height: 200px;
    border-radius: 100%;
    overflow: hidden;
    background-color: #d9d9d9;
    margin: auto;
    margin-bottom: 30px;
  `,
  ProfileImage: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,

  ImageInput: styled.input`
    display: none;
  `,

  ContentsBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  ContentsForm: styled.form`
    display: flex;
    flex-direction: column;
    gap: 18px;
  `,

  ContentsLabel: styled.label`
    font-size: 14px;
  `,

  ContentsInput: styled.input`
    width: 160px;
    height: 30px;
    outline: none;
    font-size: 12px;
    padding-left: 10px;
    margin-left: 10px;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: white;
  `,

  NicknameChangeBtn: styled.button`
    width: 90px;
    height: 30px;
    outline: none;
    border: none;
    color: white;
    margin: auto;
    font-size: 12px;
    border-radius: 15px;
    background-color: #e24c4b;
  `
};
