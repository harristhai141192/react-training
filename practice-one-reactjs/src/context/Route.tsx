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
      // set the current path that we are staying
      setCurrentPath(window.location.pathname);
    };

    // custom event click called popstate listen to the location change
    window.addEventListener('popstate', locationChange);

    return () => {
      // clear the listener
      window.removeEventListener('popstate', locationChange);
    };
  }, []);

  const isPathContainId = path.includes('/:');

  // Path Id condition comparison to return the true path
  if (isPathContainId) {
    // Get basePath from start to the end of the backslash
    const basePath = path.substring(0, path.lastIndexOf('/:'));
    const baseCurrentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));

    // Condition comparison to return to basecurrentpath or the child
    return basePath === baseCurrentPath ? children : null;
  }

  return currentPath === path ? children : null;
};

export default Route;
