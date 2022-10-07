// Libraries
import React from 'react';

// CSS
import './index.styles.css';

interface IFooterProps {
  labelName: string;
}

const Footer = ({ labelName = '' }: IFooterProps) => {
  return (
    <div className='footer'>
      <div className='footerLabel'>
        <p>{labelName}</p>
      </div>
      <div className='footerDescription'>
        <p>Copyright &#169; 2019</p>
      </div>
    </div>
  );
};

export default Footer;
