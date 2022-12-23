import { COMMENT_ACTIONS } from '@constants/actions';
import { HTTP_METHODS } from '@constants/httpMethods';
import { getAllCommentHelper } from '@helpers/commentHelper';
import { ICommentActionProps } from '@stores/Comment/commentReducer';

export const getComments = async (url: string, dispatch: (action: ICommentActionProps) => void) => {
  dispatch({
    type: COMMENT_ACTIONS.GET_COMMENT,
  });
  try {
    const response = await fetch(url, {
      method: HTTP_METHODS.GET,
      headers: {
        Authorization: `token ${process.env.VITE_TOKEN}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json',
      },
    });
    console.log('RESPONSE IN SERVICE', response);

    if (response.status == 200) {
      await getAllCommentHelper(response, COMMENT_ACTIONS.GET_COMMENT_SUCCESS, dispatch);
    }
  } catch (e) {
    dispatch({ type: COMMENT_ACTIONS.GET_COMMENT_FAILURE, data: { error: (e as Error).message } });
  }
};
