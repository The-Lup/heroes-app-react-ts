import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';
import type { Hero } from '../types/hero.interface';

interface FavoriteHeroContextProps {
  favorites: Hero[];
  favoritesCount: number;
  isFavorite: (hero: Hero) => boolean;
  toggleFavorite: (hero: Hero) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const FavoriteHeroContext = createContext(
  {} as FavoriteHeroContextProps
);

const getFavsFromLocalStorage = (): Hero[] => {
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
};

export const FavoritesHeroProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>(getFavsFromLocalStorage());

  const toggleFavorite = (hero: Hero) => {
    const heroExist = favorites.find((h) => h.id === hero.id);

    if (heroExist) {
      setFavorites(favorites.filter((h) => h.id !== hero.id));
      return;
    }

    setFavorites([...favorites, hero]);
  };

  const isFavorite = (hero: Hero) => favorites.some((h) => h.id === hero.id);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoriteHeroContext
      value={{
        favoritesCount: favorites.length,
        favorites: favorites,
        isFavorite: isFavorite,
        toggleFavorite: toggleFavorite,
      }}
    >
      {children}
    </FavoriteHeroContext>
  );
};
