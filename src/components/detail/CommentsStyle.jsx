import { styled } from 'styled-components';

export const St = {
  CommentsTitle: styled.div`
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
  `,

  CommentsAddForm: styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
  `,

  CommentsTextarea: styled.textarea`
    width: 90%;
    border-radius: 10px;
    margin-right: 20px;
    padding: 10px;
  `,

  CommentsAddButton: styled.button`
    font-size: 16px;
    color: #ffffff;
    background-color: #e24c4b;
    border: none;
    border-radius: 15px;
    padding: 7px 20px;
    cursor: pointer;

    &:hover {
      background-color: #bb3535;
    }
  `,

  CommentsBox: styled.div`
    position: relative;
    display: flex;
    border-bottom: 1px solid #989898;
    padding: 15px 20px;
  `,

  CommentsUserInfoBox: styled.div`
    width: 60px;
  `,

  CommentsUserProfileImg: styled.img`
    max-width: 40px;
    max-height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 3px;
  `,

  CommentsUserNickname: styled.div`
    font-size: 14px;
  `,

  CommentsContentsBox: styled.div`
    width: 90%;
    padding: 10px 20px;
  `,

  CommentsDate: styled.div`
    font-size: 14px;
    margin-bottom: 10px;
  `,

  CommentsBody: styled.div`
    width: 93%;
    word-wrap: break-word;
  `,

  CommentsDeleteButton: styled.button`
    position: absolute;
    top: 40%;
    right: 2%;
    height: 26px;
    font-size: 14px;
    color: #ffffff;
    background-color: #515151;
    border: none;
    border-radius: 10px;
    padding: 3px 10px;
    cursor: pointer;

    &:hover {
      background-color: #343434;
    }
  `
};
