import { styled } from 'styled-components';

export const St = {
  FooterContain: styled.footer`
    background-color: #d9d9d9;
    color: #3d3d3d;
    font-size: 13px;

    height: 140px;
    margin-top: 100px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    bottom: 0;
  `,

  MemberGitHub: styled.div``,

  GitHub: styled.div`
    height: 20px;
  `,

  MemberList: styled.div`
    display: block;
    margin-top: 10px;
  `,

  MemberLink: styled.a`
    color: #3d3d3d;
    text-decoration: none;

    padding: 0 10px;
  `,

  Copyright: styled.div`
    display: flex;
    margin: 0 auto;
    margin-top: 28px;
  `,

  TeamName: styled.div`
    font-weight: 700;
  `
};
