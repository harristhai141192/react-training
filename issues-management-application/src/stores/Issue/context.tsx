// Libraries
import { useContext, createContext, useReducer, ReactNode } from 'react';

// Reducer and Types
import issueReducer, { issueState } from './issueReducer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const IssueContext: any = createContext([]);

export const useIssueContext = () => useContext(IssueContext);

export const IssueProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(issueReducer, issueState);
  return <IssueContext.Provider value={[state, dispatch]}>{children}</IssueContext.Provider>;
};
