// Libraries
import React from 'react';

// Styles
import './index.styles.css';

interface IImageProps {
  source: string;
  alt: string;
  width?: string;
  height?: string;
}

const Image: React.FC<IImageProps> = ({ source = '', alt = '', width, height }) => {
  return <img src={source} alt={alt} width={width} height={height} />;
};

export default Image;
