// Libraries
import { useContext, createContext, useReducer, ReactNode, Dispatch } from 'react';

// Reducer & Types
import {
  CommentState,
  CommentActions,
  initialCommentState,
  commentReducer,
} from './commentReducer';

export const CommentContext = createContext<{
  state: CommentState;
  dispatch: Dispatch<CommentActions>;
}>({
  state: initialCommentState,
  dispatch: () => {},
});

export const useCommentContext = () => useContext(CommentContext);

export const CommentProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch]: [CommentState, (actionProps: CommentActions) => void] = useReducer(
    commentReducer,
    initialCommentState,
  );

  return <CommentContext.Provider value={{ state, dispatch }}>{children}</CommentContext.Provider>;
};
