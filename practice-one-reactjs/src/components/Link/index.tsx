// Libraries
import React from 'react';

// CSS
import './index.styles.css';

interface IProps {
  className?: string;
  href?: string;
  children?: React.ReactNode;
}

const Link: React.FC<IProps> = ({ className = '', href = '', children = <></> }) => {
  const handleClick = (event: React.MouseEvent) => {
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
