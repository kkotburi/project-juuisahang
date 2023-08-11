import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const St = {
  MyPostContainer: styled.div`
    left: 3rem;
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
  MyLikePostList: styled.span`
    &:hover {
      font-weight: 600;
    }
  `,

  ListBox: styled.div`
    background-color: #fff;
    border-radius: 10px;
    width: 1000px;
    height: 600px;
    padding: 10px;
    margin-top: 20px;
  `,
  PostLink: styled(Link)`
    text-decoration-line: none;
    color: #000;
  `,
  Lists: styled.div`
    width: 90%;
    height: 60px;
    margin: 20px auto;
    background-color: #f3f3f3;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
  `,
  ListDate: styled.p``,
  ListTitle: styled.p`
    margin-left: 15px;
    font-weight: bold;
  `,
  ListLike: styled.p``,
  ListProfileImgBox: styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    overflow: hidden;
  `,
  ListProfileImg: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  ListWriter: styled.p``
};
