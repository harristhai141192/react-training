// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace API {
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
