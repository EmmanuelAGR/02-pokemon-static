import { useRouter } from 'next/router';
import { Grid, Card } from '@nextui-org/react';

import { SmallPokemon } from '../../interfaces/pokemon-list';

interface Props {
  pokemon: SmallPokemon;
}

export const FavoriteCardPokemon = ({ pokemon }: Props) => {
  const router = useRouter();

  const onFavoriteClicked = () => router.push(`/name/${pokemon.name}`);

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card
        isHoverable
        isPressable
        css={{ padding: 10 }}
        onPress={onFavoriteClicked}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          width={'100%'}
          height={140}
        />
      </Card>
    </Grid>
  );
};
