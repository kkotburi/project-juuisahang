import React from 'react';
import { styled } from 'styled-components';

const Footer = () => {
  return (
    <FooterContain>
      <div>NBC Project by Team 精神改造</div>
      <br />
      <div>GitHub</div>
      <div>박제이 | 이지영 | 이혜영 | 장혜진 | 최다연</div>
    </FooterContain>
  );
};

export default Footer;

const FooterContain = styled.div`
  background-color: bisque;

  height: 200px;
  margin-top: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  bottom: 0;
  left: 0;
`;
