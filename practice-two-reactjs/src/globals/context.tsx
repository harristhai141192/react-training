import { useContext } from 'react';

import { ContextState } from './index';

const useMemberContext = () => {
  return useContext(ContextState);
};

export default useMemberContext;
