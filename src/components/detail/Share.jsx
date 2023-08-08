import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share';

const Share = () => {
  const currentUrl = window.location.href;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <CopyToClipboard text={currentUrl} onCopy={() => alert('주소가 복사되었습니다.')}>
        <button>URL</button>
      </CopyToClipboard>
      {/* <button>카카오톡</button> */}
      <TwitterShareButton url={currentUrl}>
        <TwitterIcon size={36} round={true} />
      </TwitterShareButton>
      <FacebookShareButton url={currentUrl}>
        <FacebookIcon size={36} round={true} />
      </FacebookShareButton>
    </div>
  );
};

export default Share;
