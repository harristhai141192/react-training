// Services
import { get, post, update, remove } from '@services/apiServices';

// Constants
import { API } from '@constants/apis';

export interface IPokemonProps {
  id?: string;
  code?: string;
  name?: string;
  element?: string;
  photo?: string;
  description?: string;
  type1?: string;
  type2?: string;
}

export class Pokemon implements IPokemonProps {
  id;
  code;
  name;
  element;
  photo;
  description;
  type1;
  type2;

  constructor(input?: IPokemonProps) {
    this.id = input?.id;
    this.code = input?.code;
    this.name = input?.name;
    this.element = input?.element;
    this.photo = input?.photo;
    this.description = input?.description;
    this.type1 = input?.type1;
    this.type2 = input?.type2;
  }

  getPokemons = async (): Promise<Pokemon[]> => {
    const pokemonList: Pokemon[] = await get(`${API.URL.BASE_URL}/${API.PATHS.POKEMON}`);

    return pokemonList;
  };

  addPokemon = async (url: string, data: Pokemon): Promise<Pokemon[]> => {
    return await post(url, data);
  };
}
