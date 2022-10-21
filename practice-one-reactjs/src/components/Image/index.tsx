// Libraries
import React from 'react';

// Styles
import './index.styles.css';

interface IProps {
  source?: string;
  alt?: string;
  width?: string;
  height?: string;
}

const Image: React.FC<IProps> = ({ source = '', alt = '', width, height }) => (
  <img src={source} alt={alt} width={width} height={height} />
);

export default Image;
