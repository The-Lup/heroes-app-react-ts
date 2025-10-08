import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { HomePage } from './HomePage';
import { usePaginatedHero } from '@/heroes/hooks/usePaginatedHero';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FavoritesHeroProvider } from '@/heroes/context/FavoritesHeroContext';

vi.mock('@/heroes/hooks/usePaginatedHero');

const mockUsePaginatedHero = vi.mocked(usePaginatedHero);

mockUsePaginatedHero.mockReturnValue({
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true,
} as unknown as ReturnType<typeof usePaginatedHero>);

const queryClient = new QueryClient();

const renderHomePage = (initialEntries: string[] = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <FavoritesHeroProvider>
        <QueryClientProvider client={queryClient}>
          <HomePage />
        </QueryClientProvider>
      </FavoritesHeroProvider>
    </MemoryRouter>
  );
};

describe('HomePage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('Should render homepage with default values', () => {
    const { container } = renderHomePage();

    expect(container).toMatchSnapshot();
  });

  test('Should call usePaginatedHero with default values', () => {
    renderHomePage();

    expect(mockUsePaginatedHero).toHaveBeenCalled();
    expect(mockUsePaginatedHero).toHaveBeenCalledWith(1, 6, 'all');
  });

  test('Should call usePaginatedHero with custom query params', () => {
    renderHomePage(['/?page=4&limit=5&category=villains']);

    expect(mockUsePaginatedHero).toHaveBeenCalled();
    expect(mockUsePaginatedHero).toHaveBeenCalledWith(4, 5, 'villains');
  });
  test('Should call usePaginatedHero with default page and same limit on tab click', () => {
    renderHomePage(['/?tab=favorites&page=2&limit=7']);

    const [, , , villainTab] = screen.getAllByRole('tab');

    fireEvent.click(villainTab);

    expect(mockUsePaginatedHero).toHaveBeenCalledWith(1, 7, 'villain');
  });
});
