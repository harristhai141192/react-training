// Libraries
import React from 'react';

// Services
import { get, post, update, remove } from '@services/apiServices';

// Models
import { IPokemonProps } from '@models/pokemon';

// Constants
import { API } from '@constants/apis';

// Get item from DB
export const getPokemons = async (): Promise<IPokemonProps[]> => {
  const pokemonList: IPokemonProps[] = await get(`${API.PATHS.URL_POKEMON}`);

  return pokemonList;
};

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

// Add new item to DB
export const addPokemon = async (data: IPokemonProps): Promise<IPokemonProps[]> => {
  const url = `${API.PATHS.URL_POKEMON}`;

  return post(url, data);
};

// Update new item to DB
export const updatePokemon = async (id: string, data: IPokemonProps): Promise<IPokemonProps> => {
  const updateNewPokemon: IPokemonProps = await update(`${API.PATHS.URL_POKEMON}/${id}`, data);

  return updateNewPokemon;
};
