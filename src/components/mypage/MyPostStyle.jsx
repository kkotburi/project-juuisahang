import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import ReactPaginate from 'react-paginate';

export const St = {
  MyPostContainer: styled.div`
    padding: 10px;
    margin: auto;
    position: relative;
    display: flex;
    flex-direction: column;
  `,
  PostList: styled.div`
    display: flex;
    gap: 20px;
    cursor: pointer;
  `,
  ListBtn: styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    &:focus {
      font-weight: bold;
    }
  `,
  ListBox: styled.div`
    background-color: #fff;
    border-radius: 10px;
    width: 800px;
    height: 400px;
    padding: 10px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  PostLink: styled(Link)`
    text-decoration-line: none;
    color: #000;
  `,
  Lists: styled.div`
    width: 630px;
    height: 60px;
    margin: 20px auto;
    background-color: #f3f3f3;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    word-break: break-all;
  `,
  ListDate: styled.p`
    font-size: 14px;
    margin-left: 10px;
  `,

  ListTitleBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
  `,
  ListCategory: styled.p`
    text-align: left;
    font-size: 14px;
    margin-left: 35px;
  `,
  ListTitle: styled.p`
    margin-left: 35px;
    font-size: 16px;
    font-weight: bold;
  `,
  ListLikeBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  `,
  ListWriterWrap: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    gap: 10px;
  `,
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
  ListNickname: styled.p`
    font-size: 14px;
    margin-right: 10px;
  `,
  Paginate: styled(ReactPaginate).attrs({
    activeClassName: 'active'
  })`
    margin-top: 1.3rem;
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0 5rem;
    li a {
      padding: 0.1rem 1rem;
      cursor: pointer;
    }
    li.previous a {
      font-weight: bold;
    }
    li.active a {
      font-weight: bold;
      min-width: 30px;
    }
    li.disable,
    li.disabled a {
      cursor: default;
    }
  `
};
