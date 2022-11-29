import { useContext, createContext, useReducer, ReactNode } from 'react';
import reducer, { initialState } from './reducer';
import { IInitialStateProps } from './reducer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MemberContext: any = createContext([]);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useMemberContext: any = () => {
  return useContext(MemberContext);
};

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch]: [IInitialStateProps, () => void] = useReducer(reducer, initialState);

  return <MemberContext.Provider value={[state, dispatch]}>{children}</MemberContext.Provider>;
};
