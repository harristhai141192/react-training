// Libraries
import React from 'react';

// Components
import Footer from '@components/Footer';
import Header from '@components/Header';

// Mock data
import { FOOTER_BAR_INFORMATION } from '@mockData/tableData';

interface IProps {
  children?: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => (
  <>
    <Header footerInformationBar={FOOTER_BAR_INFORMATION} />
    {children}
    <Footer />
  </>
);

export default Layout;
