import { useContext, createContext, useReducer } from 'react';
import memberReducer from './memberReducer';

export const ContextState = createContext([]);

export const useMemberContext = () => {
  return useContext(ContextState);
};

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [memberContext, dispatch] = useReducer(memberReducer, []);
  return (
    <ContextState.Provider value={[memberContext, dispatch]}>{children}</ContextState.Provider>
  );
};
