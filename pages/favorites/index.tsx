import { useState, useEffect } from 'react';

import { FavoritePokemons } from '../../components/pokemon';
import { Layout } from '../../components/layouts';
import { localFavorites } from '../../utils';
import { NoFavorites } from '../../components/ui';
import { Pokemon } from '../../interfaces/pokemon-full';
import { SmallPokemon } from '../../interfaces/pokemon-list';

const Favorites = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<SmallPokemon[]>([]);

  useEffect(() => setFavoritePokemons(localFavorites.pokemons), []);

  return (
    <Layout title='Pokémons - Favoritos'>
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default Favorites;
