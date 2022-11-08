// Services
import { get, post, update, remove } from '@services/apiServices';

// Models
import { IPokemonProps } from '@models/pokemon';

const URL_MOCK = 'https://635111333e9fa1244e5464ea.mockapi.io/pokemons';

/**
 * Get all the pokemon in DB
 * @param url - Init an URL of pokemon
 * @returns pokemon List
 */
export const getPokemons = async (): Promise<IPokemonProps[]> => {
  try {
    const pokemonList: IPokemonProps[] = await get(`${URL_MOCK}`);

    return pokemonList;
  } catch (e) {
    throw (e as Error).message;
  }
};

/**
 * Get a single pokemon in DB
 * @param url - Init an URL of item
 * @returns item List
 */
export const getAPokemon = async (id: string): Promise<IPokemonProps> => {
  try {
    const pokemon: IPokemonProps = await get(`${URL_MOCK}/${id}`);

    return pokemon;
  } catch (e) {
    throw (e as Error).message;
  }
};

export const getPokemonsWithElement = async (element: string): Promise<IPokemonProps[]> => {
  try {
    const pokemonList: IPokemonProps[] = await get(`${URL_MOCK}?element=${element}`);

    return pokemonList;
  } catch (e) {
    throw (e as Error).message;
  }
};

/**
 * Delete a new pokemon to DB
 * @param id - Init pokemon id for delete
 * @returns
 */
export const deletePokemon = async (id: string): Promise<void> => {
  try {
    const url = `${URL_MOCK}/${id}`;

    return remove(url);
  } catch (e) {
    throw (e as Error).message;
  }
};

/**
 * Adding a new pokemon to DB
 * @param data - Init data for new pokemon
 * @returns
 */
export const addPokemon = async (data: IPokemonProps): Promise<IPokemonProps[]> => {
  try {
    const url = `${URL_MOCK}`;

    return post(url, data);
  } catch (e) {
    throw (e as Error).message;
  }
};

/**
 * Update a Pokemon in DB
 * @param url - Init an URL of Pokemon
 * @param id - Find a PokemonID that is in-charged
 * @param data - Init a new data for the updated Pokemon
 * @returns
 */
export const updatePokemon = async (id: string, data: IPokemonProps): Promise<IPokemonProps> => {
  try {
    const updateNewPokemon: IPokemonProps = await update(`${URL_MOCK}/${id}`, data);

    return updateNewPokemon;
  } catch (e) {
    throw (e as Error).message;
  }
};
