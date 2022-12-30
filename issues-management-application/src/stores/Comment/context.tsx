// Libraries
import { useContext, createContext, useReducer, ReactNode } from 'react';

// Reducer & Types
import commentReducer, {
  ICommentActionProps,
  ICommentStateProps,
  commentState,
} from './commentReducer';

export const CommentContext = createContext([]);

export const useCommentContext = () => useContext(CommentContext);

export const CommentProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch]: [ICommentStateProps, (commentProps: ICommentActionProps) => void] =
    useReducer(commentReducer, commentState);
  return <CommentContext.Provider value={[state, dispatch]}>{children}</CommentContext.Provider>;
};
