import { Dropdown } from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';
import { styled } from 'styled-components';

export const St = {
  ShareDropdown: styled(Dropdown)`
    display: flex;
    flex-direction: row;
  `,

  ShareIcon: styled(ShareAltOutlined)`
    font-size: 28px;
    cursor: pointer;
  `,

  LinkIconImg: styled.img`
    width: 35px;
    border-radius: 50%;
  `,

  LikesContainer: styled.div``,

  LikesButtonBox: styled.div`
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background-color: #cfcfcfdb; */
    border-radius: 10px;
    margin-left: 20px;
    /* padding: 10px 23px; */
  `
};
