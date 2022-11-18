import { NextPage, GetStaticProps } from 'next';

import { Grid } from '@nextui-org/react';

import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';

import { pokeApi } from '../api';

interface Props {
  pokemons: SmallPokemon[];
}

// title: Listado de Pókemons
const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Listado de Pokémons'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ctx => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((pokemon, idx) => ({
    ...pokemon,
    id: idx + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
      idx + 1
    }.png`,
    icon: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${
      idx + 1
    }.png`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
