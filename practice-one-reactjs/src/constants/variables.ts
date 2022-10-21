export enum POKEMON_ELEMENTS {
  Fire = 'Fire',
  Water = 'Water',
  Earth = 'Earth',
}

export enum POKEMON_TYPE {
  Fly = 'Fly',
  Walk = 'Walk',
  Swim = 'Swim',
}

export const getPokemonElements = Object.keys(POKEMON_ELEMENTS);
export const getPokemonTypes = Object.keys(POKEMON_TYPE);
