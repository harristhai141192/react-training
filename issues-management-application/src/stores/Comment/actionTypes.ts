import { COMMENT_ACTIONS } from '@constants/actions';

import { IComment } from '@models/index';

export interface RequestCommentAction {
  type: COMMENT_ACTIONS.COMMENT_GET;
}

export interface SuccessRequestCommentAction {
  type: COMMENT_ACTIONS.COMMENT_GET_SUCCESS;
  data: { comment: IComment[] };
}

export interface FailedRequestCommentAction {
  type: COMMENT_ACTIONS.COMMENT_GET_FAILURE;
  data: { error: string };
}

export interface RequestAddCommentAction {
  type: COMMENT_ACTIONS.ADD_COMMENT_REQUEST;
}

export interface SuccessAddCommentAction {
  type: COMMENT_ACTIONS.ADD_COMMENT_SUCCESS;
  data: { comment: IComment };
}

export interface FailedAddCommentAction {
  type: COMMENT_ACTIONS.ADD_COMMENT_FAILURE;
  data: { error: string };
}

export interface RequestDeleteCommentAction {
  type: COMMENT_ACTIONS.DELETE_COMMENT_REQUEST;
}

export interface SuccessDeleteCommentAction {
  type: COMMENT_ACTIONS.DELETE_COMMENT_SUCCESS;
  data: { comment: IComment };
}

export interface FailedDeleteCommentAction {
  type: COMMENT_ACTIONS.DELETE_COMMENT_FAILURE;
  data: { error: string };
}
