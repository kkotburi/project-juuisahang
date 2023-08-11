import { styled } from 'styled-components';

export const St = {
  PostContainer: styled.div`
    background-color: #ffffff;
    border-radius: 15px;
    margin: 40px 0 60px 0;
    padding: 20px 30px;
  `,

  PostButtonBox: styled.div`
    display: flex;
    justify-content: flex-end;
  `,

  PostButton: styled.button`
    font-size: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      font-weight: 600;
    }
  `,

  PostTitleBox: styled.div`
    border-bottom: 1px solid black;
    padding-bottom: 20px;
  `,

  PostTitle: styled.div`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
  `,

  PostBody: styled.div`
    padding: 10px 20px;
  `,

  PostBottomBox: styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  `,

  PostUserBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  `,

  PostUserProfileImg: styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 10px;
  `,
  PostShareLikeBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `
};
