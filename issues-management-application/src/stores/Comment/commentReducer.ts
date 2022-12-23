import { COMMENT_ACTIONS } from '@constants/actions';
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
    case COMMENT_ACTIONS.GET_COMMENT:
      console.log('START GETTING COMMENT');

      return {
        ...state,
      };

    case COMMENT_ACTIONS.GET_COMMENT_SUCCESS:
      console.log('actions.data.comment', actions.data.comment);
      console.log('state', state.comment);

      return {
        ...state,
        comment: actions.data.comment,
      };

    case COMMENT_ACTIONS.GET_COMMENT_FAILURE:
      return {
        ...state,
        error: actions.data.error,
      };

    case COMMENT_ACTIONS.ADD_COMMENT_REQUEST:
      return {
        ...state,
      };
    case COMMENT_ACTIONS.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        comment: actions.data.comment,
      };
    case COMMENT_ACTIONS.ADD_COMMENT_FAILURE:
      return {
        ...state,
        error: actions.data.error,
      };

    case COMMENT_ACTIONS.DELETE_COMMENT_REQUEST:
      return {
        ...state,
      };
    case COMMENT_ACTIONS.DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        comment: actions.data.comment,
      };
    case COMMENT_ACTIONS.DELETE_COMMENT_FAILURE:
      return {
        ...state,
        error: actions.data.error,
      };
  }
};

export default commentReducer;
