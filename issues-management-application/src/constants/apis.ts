// // eslint-disable-next-line @typescript-eslint/no-namespace
// export namespace API {
//   export enum URL {
//     BASE_URL = 'https://api.github.com/repos/harristhai141192/bao',
//   }

//   export enum PATHS {
//     ISSUES = 'issues',
//     URL_MEMBER = 'https://635111333e9fa1244e5464ea.mockapi.io/issues',
//   }

//   export enum HEADERS {
//     'Content-Type' = 'application/json',
//   }
// }

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace API {
  export enum URL {
    BASE_URL = 'https://api.github.com/repos/harristhai141192/bao',
  }

  export enum PATHS {
    ISSUES = 'issues',
    URL_ISSUES = 'https://api.github.com/repos/harristhai141192/bao/issues',
    COMMENT = 'comments',
    URL_COMMENTS = 'https://api.github.com/repos/harristhai141192/bao/issues/comments',
  }

  export enum HEADERS {
    'Content-Type' = 'application/json',
  }

  export enum HTTP_METHODS {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    PUT = 'PUT',
  }
}
