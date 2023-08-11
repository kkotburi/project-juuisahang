import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import { Button, Dropdown } from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';

const Share = () => {
  const currentUrl = window.location.href;

  const items = [
    {
      key: '1',
      label: (
        <CopyToClipboard text={currentUrl} onCopy={() => alert('주소가 복사되었습니다.')}>
          <button>URL</button>
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
      <Dropdown
        menu={{
          items
        }}
        placement="topRight"
        arrow
      >
        {/* <IoShareSocialSharp size="30" /> */}
        <ShareAltOutlined />
      </Dropdown>
      {/* <button>카카오톡</button> */}
    </div>
  );
};

export default Share;
