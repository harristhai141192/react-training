// Libraries
import { useState, useEffect, useMemo, createContext, FC, ReactNode } from 'react';

export const RoutingContext = createContext({
  currentPath: window.location.pathname,
  params: { id: '' },
});

export const navigate = (href: string) => {
  window.history.pushState({}, '', href);
  const pathEvent = new PopStateEvent('popstate');
  window.dispatchEvent(pathEvent);
};

interface IProps {
  children: ReactNode;
}

export const Router: FC<IProps> = ({ children }) => {
  /* Set the default page to Home if not specified otherwise in the URL */
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

  const paramsId = currentPath.substring(currentPath.lastIndexOf('/') + 1) || '';
  const value = useMemo(() => ({ currentPath, params: { id: paramsId } }), [currentPath, paramsId]);

  return <RoutingContext.Provider value={value}>{children}</RoutingContext.Provider>;
};

export default Router;
