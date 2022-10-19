// Libraries
import React from 'react';

// Services
import { get, post, update, remove } from '@services/apiServices';

// Models
import { IPokemonProps } from '@models/pokemon';

// Constants
import { API } from '@constants/apis';

/**
 * Get all the pokemon in DB
 * @param url - Init an URL of pokemon
 * @returns pokemon List
 */
export const getPokemons = async (): Promise<IPokemonProps[]> => {
  const pokemonList: IPokemonProps[] = await get(`${API.PATHS.URL_POKEMON}`);

  return pokemonList;
};

/**
 * Get a single pokemon in DB
 * @param url - Init an URL of item
 * @returns item List
 */
export const getAPokemon = async (id: string): Promise<IPokemonProps> => {
  const pokemon: IPokemonProps = await get(`${API.PATHS.URL_POKEMON}/${id}`);

  return pokemon;
};

// TODO: DELETE FROM DB
// Delete an item from DB
// export const deletePokemon = async (id: string): Promise<void> => {
//   const url = `${API.PATHS.POKEMON}/${id}`;
//   const pokemonServices = new ApiService<Pokemon>();

//   return pokemonServices.delete(url);
// };

/**
 * Adding a new pokemon to DB
 * @param data - Init data for new pokemon
 * @returns
 */
export const addPokemon = async (data: IPokemonProps): Promise<IPokemonProps[]> => {
  const url = `${API.PATHS.URL_POKEMON}`;

  return post(url, data);
};

/**
 * Update a Pokemon in DB
 * @param url - Init an URL of Pokemon
 * @param id - Find a PokemonID that is in-charged
 * @param data - Init a new data for the updated Pokemon
 * @returns
 */
export const updatePokemon = async (id: string, data: IPokemonProps): Promise<IPokemonProps> => {
  const updateNewPokemon: IPokemonProps = await update(`${API.PATHS.URL_POKEMON}/${id}`, data);

  return updateNewPokemon;
};
