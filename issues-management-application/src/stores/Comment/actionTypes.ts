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
