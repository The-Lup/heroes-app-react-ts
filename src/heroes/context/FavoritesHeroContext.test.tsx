import { use } from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import {
  FavoriteHeroContext,
  FavoritesHeroProvider,
} from './FavoritesHeroContext';
import type { Hero } from '../types/hero.interface';

const mockHero = {
  id: '1',
  name: 'flash',
} as Hero;

const TestComponent = () => {
  const { favoritesCount, favorites, isFavorite, toggleFavorite } =
    use(FavoriteHeroContext);

  return (
    <div>
      <div data-testid="favorite-count">{favoritesCount}</div>
      <div data-testid="favorite-list">
        {favorites.map((hero) => (
          <div key={hero.id} data-testid={`hero-${hero.id}`}>
            {hero.name}
          </div>
        ))}
      </div>
      <button
        data-testid="toggle-favorite"
        onClick={() => toggleFavorite(mockHero)}
      >
        Toggle Favorite
      </button>
      <div data-testid="is-favorite">{isFavorite(mockHero).toString()}</div>
    </div>
  );
};

const renderContexTest = () => {
  return render(
    <FavoritesHeroProvider>
      <TestComponent />
    </FavoritesHeroProvider>
  );
};

describe('FavoritesHeroContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('Should initialize with default values', () => {
    renderContexTest();

    expect(screen.getByTestId('favorite-count').textContent).toBe('0');
    expect(screen.getByTestId('favorite-list').children.length).toBe(0);
  });

  test('Should add hero to favorites when toggleFavorite is called with a new hero', () => {
    renderContexTest();

    const button = screen.getByTestId('toggle-favorite');

    fireEvent.click(button);

    expect(screen.getByTestId('favorite-count').textContent).toBe('1');
    expect(screen.getByTestId('is-favorite').textContent).toBe('true');
    expect(screen.getByTestId('hero-1').textContent).toBe('flash');
    expect(localStorage.getItem('favorites')).toBe(
      '[{"id":"1","name":"flash"}]'
    );
  });

  test('Should remove hero from favorites when toggleFavorite is called', () => {
    localStorage.setItem('favorites', JSON.stringify([mockHero]));

    renderContexTest();
    expect(screen.getByTestId('favorite-count').textContent).toBe('1');
    expect(screen.getByTestId('is-favorite').textContent).toBe('true');
    expect(screen.getByTestId('hero-1').textContent).toBe('flash');

    const button = screen.getByTestId('toggle-favorite');
    fireEvent.click(button);

    expect(screen.getByTestId('favorite-count').textContent).toBe('0');
    expect(screen.getByTestId('is-favorite').textContent).toBe('false');
    expect(screen.queryByTestId('hero-1')).toBeNull();
  });
});
