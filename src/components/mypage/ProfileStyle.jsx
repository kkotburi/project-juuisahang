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
  ProfileContainer: styled.div`
    width: 220px;
    margin: auto;
  `,
  ProfileImageBox: styled.div`
    width: 150px;
    height: 150px;
    border-radius: 100%;
    overflow: hidden;
    background-color: #d9d9d9;
    margin: auto;
  `,
  ProfileImage: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,

  ContentsBox: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    gap: 10px;
  `,
  ContentsForm: styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,

  ContentsLabel: styled.label`
    font-size: 14px;
  `,

  ContentsInput: styled.input`
    width: 120px;
    height: 20px;
    outline: none;
    font-size: 12px;
    padding-left: 10px;
    margin-left: 10px;
    border: 1px solid gray;
    border-radius: 5px;
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
