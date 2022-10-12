import React from 'react';
import './index.styles.css';

interface ILinkProps {
  className?: string;
  href?: string;
  children?: React.ReactNode;
}

const Link: React.FC<ILinkProps> = ({ className = '', href = '', children = <></> }) => {
  const handleClick = (event: any) => {
    event.preventDefault();
    window.history.pushState({}, '', href);
    const pathEvent = new PopStateEvent('popstate');
    window.dispatchEvent(pathEvent);
  };
  return (
    <a className={className} href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
