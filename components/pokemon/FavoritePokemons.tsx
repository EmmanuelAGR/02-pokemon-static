import { Grid } from '@nextui-org/react';

import { PokemonCard } from './';
import { SmallPokemon } from '../../interfaces/pokemon-list';

interface Props {
  pokemons: SmallPokemon[];
}

export const FavoritePokemons = ({ pokemons }: Props) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {pokemons.map( pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Grid.Container>
  );
};
