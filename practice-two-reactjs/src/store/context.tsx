import { useContext, createContext, useReducer, ReactNode } from 'react';
import reducer, { initialState, IInitialStateProps, IActionProps } from './reducer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MemberContext: any = createContext([]);

export const useMemberContext = () => useContext(MemberContext);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch]: [IInitialStateProps, (actionProps: IActionProps) => void] = useReducer(
    reducer,
    initialState,
  );

  return <MemberContext.Provider value={[state, dispatch]}>{children}</MemberContext.Provider>;
};
