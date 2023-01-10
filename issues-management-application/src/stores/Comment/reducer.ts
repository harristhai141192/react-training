// Constants
import { COMMENT_ACTIONS } from '@constants/actions';

// Models
import { IComment } from '@models/index';

import {
  FailedRequestCommentAction,
  RequestCommentAction,
  SuccessRequestCommentAction,
  RequestAddCommentAction,
  SuccessAddCommentAction,
  FailedAddCommentAction,
} from './actionTypes';

export type CommentActions =
  | RequestCommentAction
  | SuccessRequestCommentAction
  | FailedRequestCommentAction
  | RequestAddCommentAction
  | SuccessAddCommentAction
  | FailedAddCommentAction;

interface IById {
  [key: string]: IComment;
}

export interface CommentState {
  byId: IById;
  order: number[];
  error: string;
}

export const initialCommentState: CommentState = {
  byId: {},
  order: [],
  error: '',
};

export const commentReducer = (
  state: CommentState = initialCommentState,
  actions: CommentActions,
): CommentState => {
  switch (actions.type) {
    // Request get comment of id
    case COMMENT_ACTIONS.GET_COMMENT: {
      return {
        ...state,
      };
    }

    // Success getting comments
    case COMMENT_ACTIONS.GET_COMMENT_SUCCESS: {
      const currentById = actions?.data?.comments?.reduce(
        (newById: object, item: IComment) => ({
          ...newById,
          [item.id]: item,
        }),
        {},
      );

      const currentOrder = actions.data?.comments?.map((item: IComment) => item.id);

      return {
        ...state,
        byId: currentById,
        order: currentOrder,
      };
    }

    // Fail to get comment
    case COMMENT_ACTIONS.GET_COMMENT_FAILURE: {
      return {
        ...state,
        error: actions.data.error,
      };
    }

    // Request adding a comment
    case COMMENT_ACTIONS.ADD_COMMENT_REQUEST: {
      return {
        ...state,
      };
    }

    // Success adding a comment
    case COMMENT_ACTIONS.ADD_COMMENT_SUCCESS: {
      const currentById = {
        ...state.byId,
        [actions.data.comment.id]: actions.data.comment,
      };

      const currentOrder = [...state.order, actions?.data?.comment?.id];

      return {
        ...state,
        byId: currentById,
        order: currentOrder,
      };
    }

    // Failed to add a comment
    case COMMENT_ACTIONS.ADD_COMMENT_FAILURE: {
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
