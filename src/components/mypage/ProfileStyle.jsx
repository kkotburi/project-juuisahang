import { styled } from 'styled-components';

export const St = {
  PageContainer: styled.div`
    width: 100%;
    display: flex;
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
    width: 150px;
    height: 150px;
    border-radius: 100%;
    overflow: hidden;
    background-color: #d9d9d9;
    margin: auto;
    margin-bottom: 20px;
  `,
  ProfileImage: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,

  ContentsBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    gap: 20px;
  `,
  ContentsForm: styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
  `,

  ContentsLabel: styled.label`
    font-size: 14px;
  `,

  ContentsInput: styled.input`
    width: 120px;
    height: 22px;
    outline: none;
    font-size: 12px;
    padding-left: 10px;
    margin-left: 10px;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: white;
  `,

  NicknameChangeBtn: styled.button`
    width: 85px;
    height: 22px;
    outline: none;
    border: none;
    color: white;
    margin: auto;
    font-size: 12px;
    border-radius: 15px;
    background-color: #e24c4b;
  `
};
