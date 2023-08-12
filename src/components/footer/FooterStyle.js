import { styled } from 'styled-components';

export const St = {
  FooterContain: styled.footer`
    background-color: #d9d9d9;
    color: #3d3d3d;
    font-size: 13px;

    height: 80px;
    margin-top: 100px;

    display: flex;
    justify-content: center;
    flex-direction: column;

    bottom: 0;
  `,

  MemberGitHub: styled.div`
    text-align: center;
  `,

  GitHub: styled.div`
    height: 20px;
  `,

  MemberList: styled.div`
    display: block;
  `,

  MemberLink: styled.a`
    color: #3d3d3d;
    text-decoration: none;

    padding: 0 10px;
    text-align: center;
  `,

  Copyright: styled.div`
    display: flex;
    margin: 0 auto;
    margin-top: 10px;
  `,

  TeamName: styled.div`
    font-weight: 700;
  `
};
