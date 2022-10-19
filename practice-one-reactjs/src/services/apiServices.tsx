// Constants
import { API } from '@constants/apis';

// Models
import { IPokemonProps } from '@models/pokemon';

/**
 * Get all the Pokemon in DB
 * @param url - Init an URL of Pokemon
 * @returns Pokemon List
 */
export const get = async <IPokemonProps,>(url: string): Promise<IPokemonProps> => {
  const response = await fetch(url);
  return response.json();
};

/**
 * Adding a new Pokemon to DB
 * @param url - Init an URL of Pokemon
 * @param data - Init data for new Pokemon
 * @returns
 */
export const post = async <IPokemonProps,>(
  url: string,
  data: IPokemonProps,
): Promise<IPokemonProps[]> => {
  const response = await fetch(url, {
    method: API.HTTP_METHODS.POST,
    headers: API.HEADERS,
    body: JSON.stringify(data),
  });

  return await response.json();
};

/**
 * Update a Pokemon in DB
 * @param url - Init an URL of Pokemon
 * @param id - Find a PokemonID that is in-charged
 * @param data - Init a new data for the updated Pokemon
 * @returns
 */
export const update = async (url: string, data: IPokemonProps): Promise<IPokemonProps> => {
  const response = await fetch(url, {
    method: API.HTTP_METHODS.PATCH,
    headers: API.HEADERS,
    body: JSON.stringify(data),
  });

  return await response.json();
};

/**
 * Remove a Pokemon in DB
 * @param url - Init an URL of Pokemon
 * @param id - Find a PokemonID that is in-charged for delete
 * @returns
 */
export const remove = async (url: string, id: string): Promise<void> => {
  const response = await fetch(url + `/${id}`, {
    method: API.HTTP_METHODS.DELETE,
    headers: API.HEADERS,
  });

  return await response.json();
};
