import { useContext } from 'react';

// Router
import { RoutingContext } from './Router';

interface IProps {
  children: JSX.Element;
  path: string;
}

const Route = ({ children, path }: IProps): JSX.Element | null => {
  const { currentPath } = useContext(RoutingContext);

  const isPathContainId = path.includes('/:');

  // Path id condition comparison to return the true path
  if (isPathContainId) {
    // Get basePath from start to the end of the backslash
    const basePath = path.substring(0, path.lastIndexOf('/:'));
    const baseCurrentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));

    // Condition comparison to return to base current path for the child
    return basePath === baseCurrentPath ? children : null;
  }

  return currentPath === path ? children : null;
};

export default Route;
