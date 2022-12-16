import { ACTIONS } from '@constants/actions';
import { IComment } from '@models/index';
import {
  FailedRequestCommentAction,
  RequestCommentAction,
  SuccessRequestCommentAction,
  FailedDeleteCommentAction,
  RequestAddCommentAction,
  SuccessAddCommentAction,
  FailedAddCommentAction,
  RequestDeleteCommentAction,
  SuccessDeleteCommentAction,
} from './actionTypes';

export interface ICommentStateProps {
  comment: IComment[];
  error: string;
}

export const commentState: ICommentStateProps = {
  comment: [],
  error: '',
};

export type ICommentActionProps =
  | RequestCommentAction
  | SuccessRequestCommentAction
  | FailedRequestCommentAction
  | FailedDeleteCommentAction
  | RequestAddCommentAction
  | SuccessAddCommentAction
  | FailedAddCommentAction
  | RequestDeleteCommentAction
  | SuccessDeleteCommentAction;

const commentReducer = (state: ICommentStateProps = commentState, actions: ICommentActionProps) => {
  switch (actions.type) {
    case ACTIONS.COMMENT_REQUEST:
      return {
        ...state,
      };

    case ACTIONS.COMMENT_REQUEST_SUCCESS:
      return {
        ...state,
        comment: actions.data.comment,
      };

    case ACTIONS.COMMENT_REQUEST_FAILURE:
      return {
        ...state,
        error: actions.data.error,
      };

    case ACTIONS.ADD_COMMENT_REQUEST:
      return {
        ...state,
      };
    case ACTIONS.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        comment: actions.data.comment,
      };
    case ACTIONS.ADD_COMMENT_FAILURE:
      return {
        ...state,
        error: actions.data.error,
      };

    case ACTIONS.DELETE_COMMENT_REQUEST:
      return {
        ...state,
      };
    case ACTIONS.DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        comment: actions.data.comment,
      };
    case ACTIONS.DELETE_COMMENT_FAILURE:
      return {
        ...state,
        error: actions.data.error,
      };
  }
};

export default commentReducer;
