// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace API {
  export const PATHS = {
    ISSUES: 'issues',
    COMMENT: 'comments',
  };

  export const DELIVERY_CALL = {
    URL_ISSUES: `${process.env.VITE_BASE_URL}/${PATHS.ISSUES}`,
    URL_COMMENTS: `${process.env.VITE_BASE_URL}/${PATHS.COMMENT}`,
  };

  export enum HEADERS {
    'Content-Type' = 'application/json',
  }
}
