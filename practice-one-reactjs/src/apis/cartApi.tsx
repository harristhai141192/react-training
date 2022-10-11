// Libraries
import React from 'react';

// Helpers
import ApiService from '@services/apiServices';

// Models
import { IPokemon } from 'src/models/pokemon';

// Constants
import { API } from '@constants/apis';

export const getPokemons = async (): Promise<IPokemon[]> => {
  const pokemon = new ApiService<IPokemon>();
  const pokemonList = await pokemon.get(API.PATHS.POKEMON);

  return pokemonList;
};

export const deletePokemon = async (id: string): Promise<void> => {
  const url = `${API.PATHS.POKEMON}/${id}`;
  const pokemonServices = new ApiService<IPokemon>();

  return pokemonServices.delete(url);
};

export const newPokemon = async (data: IPokemon): Promise<void> => {
  const url = `${API.PATHS.POKEMON}`;
  const pokemonServices = new ApiService<IPokemon>();

  pokemonServices.post(url, data);
};

export const updatePokemon = async (
  id: string,
  code: string,
  name: string,
  element: string,
): Promise<IPokemon> => {
  const newData = { id, code, name, element } as IPokemon;
  const pokemonServices = new ApiService<IPokemon>();
  const newPokemon = pokemonServices.patch(`${API.PATHS.POKEMON}/${id}`, newData);

  return newPokemon;
};
