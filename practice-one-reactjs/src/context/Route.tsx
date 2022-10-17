// Libraries
import { useEffect, useState } from 'react';

interface IProps {
  children: JSX.Element;
  path: string;
}

const Route = ({ children, path }: IProps): JSX.Element | null => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const locationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', locationChange);

    return () => {
      window.removeEventListener('popstate', locationChange);
    };
  });

  return currentPath === path ? children : null;
};

export default Route;
