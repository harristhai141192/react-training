// Libraries
import { useContext, createContext, useReducer, ReactNode } from 'react';

// Reducer and Types
import issueReducer, { issueState } from './issueReducer';

export const IssueContext = createContext([]);

export const useIssueContext = () => useContext(IssueContext);

export const IssueProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(issueReducer, issueState);
  return <IssueContext.Provider value={[state, dispatch]}>{children}</IssueContext.Provider>;
};
