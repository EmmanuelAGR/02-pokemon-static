import { Pokemon } from '../interfaces';
import { SmallPokemon } from '../interfaces/pokemon-list';

export const transformPokemon = ({
  id,
  name,
  sprites,
}: Pokemon): SmallPokemon => {
  return {
    id: id,
    name: name,
    img: sprites.other?.['official-artwork'].front_default || '',
    icon: sprites.versions?.['generation-vii'].icons.front_default || '',
  };
};
