// Libraries
import React from 'react';

// Helpers
import ApiService from '@services/apiServices';

// Models
import { Pokemon } from 'src/models/pokemon';

// Constants
import { API } from '@constants/apis';

// Get item from DB
export const getPokemons = async (): Promise<Pokemon[]> => {
  const pokemon = new ApiService<Pokemon>();
  const pokemonList = await pokemon.get(API.PATHS.POKEMON);

  return pokemonList;
};

// Delete an item from DB
export const deletePokemon = async (id: string): Promise<void> => {
  const url = `${API.PATHS.POKEMON}/${id}`;
  const pokemonServices = new ApiService<Pokemon>();

  return pokemonServices.delete(url);
};

// Add new item to DB
export const newPokemon = async (data: Pokemon): Promise<void> => {
  const url = `${API.PATHS.POKEMON}`;
  const pokemonServices = new ApiService<Pokemon>();

  pokemonServices.post(url, data);
};

// Update new item to DB
export const updatePokemon = async (
  id: string,
  code: string,
  name: string,
  element: string,
  photo: string,
  description: string,
  type1: string,
  type2: string,
): Promise<Pokemon> => {
  const newData = { id, code, name, element, photo, description, type1, type2 } as Pokemon;
  const pokemonServices = new ApiService<Pokemon>();
  const newPokemon = pokemonServices.patch(`${API.PATHS.POKEMON}/${id}`, newData);

  return newPokemon;
};
