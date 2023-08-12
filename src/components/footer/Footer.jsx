import React from 'react';
import { styled } from 'styled-components';

const Footer = () => {
  return (
    <FooterContain>
      <MemberGitHub>
        <GitHub>GitHub</GitHub>
        <MemberList>
          <MemberLink href="https://github.com/ParkJe2">박제이</MemberLink>|
          <MemberLink href="https://github.com/lizzieFEstudy">이지영</MemberLink>|
          <MemberLink href="https://github.com/kkotburi">이혜영</MemberLink>|
          <MemberLink href="https://github.com/huizhenz">장혜진</MemberLink>|
          <MemberLink href="https://github.com/cheddaryeon">최다연</MemberLink>
        </MemberList>
      </MemberGitHub>
      <Copyright>
        Copyright @ <TeamName>Team 精神改造</TeamName>
      </Copyright>
    </FooterContain>
  );
};

export default Footer;

const FooterContain = styled.footer`
  background-color: #96969667;

  height: 80px;
  margin-top: 100px;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const MemberGitHub = styled.div`
  margin: 0px 100px 5px 100px;
`;

const GitHub = styled.div`
  font-size: 14px;
  height: 20px;
`;

const MemberList = styled.div`
  display: flex;
  align-items: center;
`;

const MemberLink = styled.a`
  font-size: 14px;
  margin: 6px 10px;
`;

const Copyright = styled.div`
  font-size: 14px;
  margin: 0px 100px;

  display: flex;
`;

const TeamName = styled.div`
  font-weight: 700;
`;
