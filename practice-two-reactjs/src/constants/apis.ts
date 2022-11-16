// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace API {
  export enum URL {
    BASE_URL = 'http://localhost:3001',
  }

  export enum PATHS {
    MEMBER = 'members',
    URL_MEMBER = 'https://635111333e9fa1244e5464ea.mockapi.io/members',
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
