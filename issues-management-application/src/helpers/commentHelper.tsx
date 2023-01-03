// Constants
import { COMMENT_ACTIONS } from '@constants/actions';

// Stores
import { CommentActions } from '@stores/Comment/commentReducer';

export const pushCommentsToStore = async (
  response: Response,
  dispatchActions: COMMENT_ACTIONS,
  dispatch: (action: CommentActions) => void,
) => {
  const comments = await response.json();

  dispatch({ type: dispatchActions, data: { comments } });
};
