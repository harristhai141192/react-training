import { useContext, createContext, useReducer, ReactNode } from 'react';
import reducer, { initialState } from './reducer';

// MEMBERS - member
export const MemberContext = createContext([]);

export const useMemberContext = () => {
  return useContext(MemberContext);
};

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <MemberContext.Provider value={[state, dispatch]}>{children}</MemberContext.Provider>;
};
