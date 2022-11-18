import { pokeApi } from '../api';
import { Pokemon } from '../interfaces';

export const getPokemonInfo = async (search: string) => {
  const {
    data: {
      id,
      name,
      sprites: { front_default, back_default, front_shiny, back_shiny, other },
    },
  } = await pokeApi.get<Pokemon>(`/pokemon/${search}`);

  return {
    id,
    name,
    sprites: {
      front_default,
      back_default,
      front_shiny,
      back_shiny,
      other: {
        dream_world: {
          front_default: other?.dream_world?.front_default,
        },
        'official-artwork': {
          front_default: other?.['official-artwork']?.front_default,
        },
      },
    },
  };
};
