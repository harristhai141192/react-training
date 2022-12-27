// Constants
import { COMMENT_ACTIONS } from '@constants/actions';
import { HTTP_METHODS } from '@constants/httpMethods';

// Helpers
import { pushCommentsToStore } from '@helpers/commentHelper';

// Stores
import { ICommentActionProps } from '@stores/Comment/commentReducer';
import { HEADERS } from '@constants/apis';

export const getComments = async (url: string, dispatch: (action: ICommentActionProps) => void) => {
  dispatch({
    type: COMMENT_ACTIONS.GET_COMMENT,
  });
  try {
    const response = await fetch(url, {
      method: HTTP_METHODS.GET,
      headers: HEADERS,
    });
    if (response.status == 200) {
      await pushCommentsToStore(response, COMMENT_ACTIONS.GET_COMMENT_SUCCESS, dispatch);
    }
  } catch (e) {
    dispatch({ type: COMMENT_ACTIONS.GET_COMMENT_FAILURE, data: { error: (e as Error).message } });
  }
};
