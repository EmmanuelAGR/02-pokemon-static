import { pokeApi } from '../api';
import { Pokemon } from '../interfaces';

export const getPokemonInfo = async (search: string) => {
  try {
    const {
      data: {
        id,
        name,
        sprites: {
          front_default,
          back_default,
          front_shiny,
          back_shiny,
          versions,
          other,
        },
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
        versions: {
          ['generation-vii']: {
            icons: {
              front_default: versions?.['generation-vii'].icons.front_default,
            },
          },
        },
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
  } catch (error) {
    return null;
  }
};
