import { useContext, createContext, useReducer, ReactNode } from 'react';
import issueReducer, { IActionIssueProps, IIssueStateProps, issueState } from './issueReducer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const IssueContext: any = createContext([]);

export const useIssueContext = () => useContext(IssueContext);

export const IssueProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch]: [IIssueStateProps, (actionProps: IActionIssueProps) => void] =
    useReducer(issueReducer, issueState);
  return <IssueContext.Provider value={[state, dispatch]}>{children}</IssueContext.Provider>;
};
