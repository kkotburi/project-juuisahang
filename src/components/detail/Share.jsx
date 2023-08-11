import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import { Dropdown } from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';
import { styled } from 'styled-components';

const Share = () => {
  const currentUrl = window.location.href;

  const items = [
    {
      key: '1',
      label: (
        <CopyToClipboard text={currentUrl} onCopy={() => alert('주소가 복사되었습니다.')}>
          <LinkIconImg src={'/linkIcon.png'} alt="링크 아이콘" />
        </CopyToClipboard>
      )
    },
    {
      key: '2',
      label: (
        <TwitterShareButton url={currentUrl}>
          <TwitterIcon size={36} round={true} />
        </TwitterShareButton>
      )
    },
    {
      key: '3',
      label: (
        <FacebookShareButton url={currentUrl}>
          <FacebookIcon size={36} round={true} />
        </FacebookShareButton>
      )
    }
  ];

  return (
    <div>
      <ShareDropdown
        menu={{
          items
        }}
        placement="bottomRight"
        arrow
      >
        <ShareIcon />
      </ShareDropdown>
    </div>
  );
};

export default Share;

const ShareDropdown = styled(Dropdown)`
  display: flex;
  flex-direction: row;
`;

const ShareIcon = styled(ShareAltOutlined)`
  font-size: 28px;
  cursor: pointer;
`;

const LinkIconImg = styled.img`
  width: 35px;
  border-radius: 50%;
`;
