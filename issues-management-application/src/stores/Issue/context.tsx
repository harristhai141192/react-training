// Libraries
import { useContext, createContext, useReducer, ReactNode, Dispatch } from 'react';

// Reducer and Types
import issueReducer, { IssueState, IssueAction, initialIssueState } from './issueReducer';

export const IssueContext = createContext<{
  state: IssueState;
  dispatch: Dispatch<IssueAction>;
}>({
  state: initialIssueState,
  dispatch: () => {},
});

export const useIssueContext = () => useContext(IssueContext);

export const IssueProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch]: [IssueState, (actionProps: IssueAction) => void] = useReducer(
    issueReducer,
    initialIssueState,
  );
  return <IssueContext.Provider value={{ state, dispatch }}>{children}</IssueContext.Provider>;
};
