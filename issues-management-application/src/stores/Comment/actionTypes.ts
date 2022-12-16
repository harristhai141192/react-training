import { ACTIONS } from '@constants/actions';

import { IComment } from '@models/index';

export interface RequestCommentAction {
  type: ACTIONS.COMMENT_REQUEST;
}

export interface SuccessRequestCommentAction {
  type: ACTIONS.COMMENT_REQUEST_SUCCESS;
  data: { comment: IComment[] };
}

export interface FailedRequestCommentAction {
  type: ACTIONS.COMMENT_REQUEST_FAILURE;
  data: { error: string };
}

export interface RequestAddCommentAction {
  type: ACTIONS.ADD_COMMENT_REQUEST;
}

export interface SuccessAddCommentAction {
  type: ACTIONS.ADD_COMMENT_SUCCESS;
  data: { comment: IComment };
}

export interface FailedAddCommentAction {
  type: ACTIONS.ADD_COMMENT_FAILURE;
  data: { error: string };
}

export interface RequestDeleteCommentAction {
  type: ACTIONS.DELETE_COMMENT_REQUEST;
}

export interface SuccessDeleteCommentAction {
  type: ACTIONS.DELETE_COMMENT_SUCCESS;
  data: { comment: IComment };
}

export interface FailedDeleteCommentAction {
  type: ACTIONS.DELETE_COMMENT_FAILURE;
  data: { error: string };
}
