import { COMMENT_ACTIONS } from '@constants/actions';
import { ICommentActionProps } from '@stores/Comment/commentReducer';

export const getAllCommentHelper = async (
  response: Response,
  dispatchActions: COMMENT_ACTIONS,
  dispatch: (action: ICommentActionProps) => void,
) => {
  const comments = await response.json();
  console.log('COMMENTS', comments);

  dispatch({ type: dispatchActions, data: { comments } });
};
