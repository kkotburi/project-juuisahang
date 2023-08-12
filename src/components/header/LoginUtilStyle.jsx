import { styled } from 'styled-components';

export const St = {
  UtilBox: styled.div`
    display: flex;
    align-items: center;

    > small {
      font-size: 0.9em;
    }
  `,
  UserName: styled.span`
    flex: none;
  `,
  ProfileMini: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: none;
    overflow: hidden;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    margin-right: 8px;
    border: 1px solid #e24c4b;

    img {
      width: 100%;
      height: 100%;
    }
  `
};
