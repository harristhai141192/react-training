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
  const pokemonList: IPokemonProps[] = await get(`${API.URL.BASE_URL}/${API.PATHS.POKEMON}`);

  return pokemonList;
};

export const getAPokemon = async (id: string): Promise<IPokemonProps> => {
  const pokemon: IPokemonProps = await get(`${API.URL.BASE_URL}/${API.PATHS.POKEMON}/${id}`);

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
  const url = `${API.URL.BASE_URL}/${API.PATHS.POKEMON}`;

  return post(url, data);
};

// TODO: Update item to DB
// Update new item to DB
// export const updatePokemon = async (
//   id: string,
//   code: string,
//   name: string,
//   element: string,
//   photo: string,
//   description: string,
//   type1: string,
//   type2: string,
// ): Promise<Pokemon> => {
//   const newData = { id, code, name, element, photo, description, type1, type2 } as Pokemon;
//   const pokemonServices = new ApiService<Pokemon>();
//   const newPokemon = pokemonServices.patch(`${API.PATHS.POKEMON}/${id}`, newData);

//   return newPokemon;
// };
