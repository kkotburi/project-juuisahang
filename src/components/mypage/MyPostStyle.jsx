import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import ReactPaginate from 'react-paginate';

export const St = {
  MyPostContainer: styled.div`
    margin: 0 auto;
    padding: 10px;
    display: flex;
    position: relative;
    flex-direction: column;
  `,
  PostList: styled.div`
    gap: 20px;
    display: flex;
    cursor: pointer;
  `,
  ListBtn: styled.button`
    border: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    background-color: transparent;
    &:hover {
      font-weight: 700;
    }
    &:focus {
      font-weight: 800;
      color: #e24c4b;
    }
  `,
  ListBox: styled.div`
    width: 50rem;
    padding: 5px;
    height: 35rem;
    display: flex;
    margin-top: 20px;
    align-items: center;
    border-radius: 10px;
    flex-direction: column;
    background-color: #fff;
  `,
  PostLink: styled(Link)`
    color: #000;
    text-decoration-line: none;
  `,
  Lists: styled.div`
    width: 40rem;
    height: 60px;
    display: flex;
    padding: 5px;
    cursor: pointer;
    margin: 30px;
    border-radius: 10px;
    align-items: center;
    word-break: break-all;
    background-color: #f3f3f3;
  `,
  ListDate: styled.p`
    font-size: 14px;
    margin-left: 10px;
  `,

  ListTitleBox: styled.div`
    gap: 5px;
    display: flex;
    flex-direction: column;
  `,
  ListCategory: styled.p`
    color: #e24c4b;
    font-size: 14px;
    text-align: left;
    margin-left: 35px;
  `,
  ListTitle: styled.p`
    font-size: 16px;
    margin-left: 35px;
    font-weight: bold;
  `,
  ListLikeBox: styled.div`
    gap: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
  `,
  ListWriterWrap: styled.div`
    gap: 10px;
    display: flex;
    margin-left: auto;
    flex-direction: row;
    align-items: center;
  `,
  ListProfileImgBox: styled.div`
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 100%;
  `,
  ListProfileImg: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translateZ(0);
    backface-visibility: hidden;
    image-rendering: -webkit-optimize-contrast;
  `,
  ListNickname: styled.p`
    font-size: 14px;
    margin-right: 10px;
  `,

  PaginationBox: styled.div`
    width: 100%;
    bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;
    left: 0;
    position: absolute;
  `,

  Paginate: styled(ReactPaginate).attrs({
    activeClassName: 'active'
  })`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    list-style-type: none;
    justify-content: center;
    li {
      margin: 0;
      padding: 0;
    }
    a {
      cursor: pointer;
      padding: 0.1rem 1rem;
      font-weight: normal;
    }
    li.previous a,
    li.next a {
      font-weight: normal;
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
