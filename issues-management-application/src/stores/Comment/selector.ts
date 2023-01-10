import { useCommentContext } from './context';

export const getAllComments = () => {
  const { state } = useCommentContext();
  return state.order.map((id) => state.byId[id]);
};
