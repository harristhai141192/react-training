import { COMMENT_ACTIONS } from '@constants/actions';

import { IComment } from '@models/index';

export interface RequestCommentAction {
  type: COMMENT_ACTIONS.GET_COMMENT;
}

export interface SuccessRequestCommentAction {
  type: COMMENT_ACTIONS.GET_COMMENT_SUCCESS;
  data: { comments: IComment[] };
}

export interface FailedRequestCommentAction {
  type: COMMENT_ACTIONS.GET_COMMENT_FAILURE;
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
