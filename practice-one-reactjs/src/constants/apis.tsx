// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace API {
  export enum URL {
    BASE_URL = 'http://localhost:3001',
  }

  export enum PATHS {
    POKEMON = 'pokemons',
  }

  export enum HEADERS {
    'Content-Type' = 'application/json',
  }

  export enum HTTP_METHODS {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
  }
}
