import { Pokemon } from '../interfaces/pokemon-full';
import { transformPokemon } from './transformPokemon';
import { SmallPokemon } from '../interfaces/pokemon-list';

const toggleFavorite = (pokemon: Pokemon): void => {
  let favorites: SmallPokemon[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );

  if (favorites.find(favorite => favorite.id === pokemon.id))
    favorites = favorites.filter(favorite => favorite.id !== pokemon.id);
  else favorites.push(transformPokemon(pokemon));

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  const favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );
  return favorites.includes(id);
};

const pokemons = (): SmallPokemon[] =>
  JSON.parse(localStorage.getItem('favorites') || '[]');

export default {
  toggleFavorite,
  existInFavorites,
  pokemons,
};
