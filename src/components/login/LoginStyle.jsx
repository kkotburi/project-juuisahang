import { styled } from 'styled-components';

export const St = {
  FormContainer: styled.div`
    width: 460px;
    margin: 0 auto;
    padding: 80px 0 0;
  `,
  Logo: styled.div`
    text-align: center;
    margin-bottom: 30px;

    img {
      width: 170px;
    }

    p {
      color: #7d7c83;
      font-size: 18px;
      font-weight: 400;
      line-height: 1.6;
    }
  `,
  FormRow: styled.div`
    margin-bottom: 12px;

    > label {
      display: block;
      color: #5c5c5c;
      margin: 24px 0 8px;
      font-size: 15px;
    }
  `,
  FormInput: styled.input`
    box-sizing: border-box;
    position: relative;
    display: inline-flex;
    width: 100%;
    min-width: 0;
    height: 55px;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    background-color: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    transition: all 0.2s;

    &:focus {
      border-color: #4096ff;
      box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
      border-inline-end-width: 1px;
      outline: 0;
    }

    &.error {
      border-color: #ff4d4f;

      &:focus {
        border-color: #ffa39e;
        box-shadow: 0 0 0 2px rgba(255, 38, 5, 0.06);
      }
    }
  `,
  FormAlert: styled.small`
    display: block;
    margin-top: 6px;
    color: #ff4d4f;
    font-size: 14px;
    line-height: 1.6;
  `,
  ButtonBox: styled.div`
    margin-top: 24px;
    text-align: center;
  `,
  ButtonPrimary: styled.button`
    width: 460px;
    font-size: 16px;
    height: 55px;
    padding: 4px 16px;
    border-radius: 28px;
    background: rgb(226 76 75);
    color: #fff;
    transition: all 0.2s;
    border: 0;
    cursor: pointer;

    &:hover {
      background: rgba(226, 76, 75, 0.9);
    }
  `,
  JoinLinkBox: styled.div`
    margin-top: 24px;
    text-align: center;
    font-size: 14px;

    a {
      color: rgb(226 76 75);
      margin-left: 8px;
      font: inherit;
      font-weight: 600;
      text-decoration: none;
    }
  `,
  ProfileBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: none;
    overflow: hidden;
    border-radius: 100%;
    width: 100px;
    height: 100px;
    margin-top: 12px;

    img {
      width: 100%;
    }
  `,
  InfoBox: styled.div`
    .ant-alert {
      padding-bottom: 56px;
      padding-left: 122px;
      background-image: url(https://sontbthwhfethyggenin.supabase.co/storage/v1/object/public/profile/ico_19.png);
      background-position: 24px center;
      background-repeat: no-repeat;
      background-size: 80px;
    }

    .ant-alert-message {
      font-weight: 600;
      color: rgb(226 76 75);
    }

    .ant-alert-action {
      position: absolute;
      bottom: 20px;
    }
  `
};
