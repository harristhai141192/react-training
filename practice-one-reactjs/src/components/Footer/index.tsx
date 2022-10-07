// Libraries
import React from 'react';

// CSS
import './index.styles.css';

interface IFooterProps {
  labelName: string;
  footerDescription: React.ReactNode;
}

const Footer = ({ labelName = '', footerDescription = '' }: IFooterProps) => {
  return (
    <div className='footer'>
      <div className='footerLabel'>
        <p>{labelName}</p>
      </div>
      <div className='footerDescription'>{footerDescription}</div>
    </div>
  );
};

export default Footer;
