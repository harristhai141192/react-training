// Constants
import { COMMENT_ACTIONS } from '@constants/actions';
import { HTTP_METHODS } from '@constants/httpMethods';

// Helpers
import { getAllCommentHelper } from '@helpers/commentHelper';

// Stores
import { ICommentActionProps } from '@stores/Comment/commentReducer';
import { HEADERS } from '../constants/apis';

export const getComments = async (url: string, dispatch: (action: ICommentActionProps) => void) => {
  dispatch({
    type: COMMENT_ACTIONS.GET_COMMENT,
  });
  try {
    const response = await fetch(url, {
      method: HTTP_METHODS.GET,
      headers: HEADERS,
    });
    console.log('RESPONSE IN SERVICE', response);

    if (response.status == 200) {
      await getAllCommentHelper(response, COMMENT_ACTIONS.GET_COMMENT_SUCCESS, dispatch);
    }
  } catch (e) {
    dispatch({ type: COMMENT_ACTIONS.GET_COMMENT_FAILURE, data: { error: (e as Error).message } });
  }
};
