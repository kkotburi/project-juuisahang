import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import React from 'react';
import { styled } from 'styled-components';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Children>{children}</Children>
      <Footer />
    </div>
  );
};

export default Layout;

const Children = styled.div`
  width: 1200px;
  margin: 0 auto;
  min-height: 41rem;
`;
