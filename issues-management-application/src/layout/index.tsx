// Libraries
import React from 'react';

// Components
import Footer from '@components/Footer';
import Header from '@components/Header';

interface IProps {
  children?: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
