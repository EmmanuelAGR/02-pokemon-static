import { FC } from 'react';

import { useRouter } from 'next/router';
import Image from 'next/image';

import { Card, Grid, Row, styled, Text } from '@nextui-org/react';

import { SmallPokemon } from '../../interfaces';

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { id, name, img, icon, url } = pokemon;

  const router = useRouter();

  const onPress = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <Grid xs={12} sm={3} md={2} xl={1} key={id}>
      <Card isHoverable isPressable onPress={onPress}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} width='100%' height={140} />
        </Card.Body>
        <Card.Footer>
          <Row align='flex-end' justify='space-between'>
            <Row gap={0.5} align='center'>
              <Image
                src={icon}
                width='40%'
                height={40}
                objectFit='scale-down'
                alt={`Sprite ${name}`}
              />
              <Text transform='capitalize'>{name}</Text>
            </Row>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
