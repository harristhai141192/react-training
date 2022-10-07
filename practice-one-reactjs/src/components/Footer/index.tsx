// Libraries
import React from 'react';

// CSS
import './index.styles.css';

interface IFooterProps {
  labelLogoName: string;
}

const Footer = ({ labelLogoName = '' }: IFooterProps) => {
  return (
    <div className='footer'>
      <div className='footerLabel'>
        <h1 className='labelLogoName'>{labelLogoName}</h1>
      </div>
      <div className='footerDescription'>
        <p>Copyright &#169; 2019</p>
      </div>
    </div>
  );
};

export default Footer;
