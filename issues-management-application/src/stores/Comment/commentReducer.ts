// Constants
import { COMMENT_ACTIONS } from '@constants/actions';

// Models
import { IComment } from '@models/index';

import {
  FailedRequestCommentAction,
  RequestCommentAction,
  SuccessRequestCommentAction,
} from './actionTypes';

export type CommentActions =
  | RequestCommentAction
  | SuccessRequestCommentAction
  | FailedRequestCommentAction;

export interface CommentState {
  comments: IComment[];
  error: string;
}

export const initialCommentState: CommentState = {
  comments: [],
  error: '',
};

export const commentReducer = (
  state: CommentState = initialCommentState,
  actions: CommentActions,
): CommentState => {
  switch (actions.type) {
    case COMMENT_ACTIONS.GET_COMMENT: {
      return {
        ...state,
      };
    }

    case COMMENT_ACTIONS.GET_COMMENT_SUCCESS: {
      return {
        ...state,
        comments: actions.data.comments,
      };
    }

    case COMMENT_ACTIONS.GET_COMMENT_FAILURE: {
      return {
        ...state,
        error: actions.data.error,
      };
    }

    default: {
      return state;
    }
  }
};

export default commentReducer;
