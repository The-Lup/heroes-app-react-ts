import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import SearchPage from './SearchPage';
import { searchHeroAction } from '@/heroes/actions/search-hero.action';
import type { Hero } from '@/heroes/types/hero.interface';

vi.mock('@/heroes/actions/search-hero.action');
const mockSearchHeroAction = vi.mocked(searchHeroAction);

vi.mock('@/components/ui/custom/CustomJumbotron', () => ({
  CustomJumbotron: () => <div data-testid="custom-jumbotron"></div>,
}));

vi.mock('@/heroes/components/HeroGrid', () => ({
  HeroGrid: ({ heroes }: { heroes: Hero[] }) => (
    <div data-testid="hero-grid">
      {heroes.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </div>
  ),
}));

const queryClient = new QueryClient();

const renderSearchPage = (initialEntries: string[] = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <QueryClientProvider client={queryClient}>
        <SearchPage />
      </QueryClientProvider>
    </MemoryRouter>
  );
};

describe('SearchPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('Should render with default values', () => {
    const { container } = renderSearchPage();

    expect(mockSearchHeroAction).toHaveBeenCalledWith({
      name: '',
      strength: '',
    });

    expect(container).toMatchSnapshot();
  });

  test('Should call search action with name parameter', () => {
    const { container } = renderSearchPage(['/search?name=flash']);

    expect(mockSearchHeroAction).toHaveBeenCalledWith({
      name: 'flash',
      strength: '',
    });

    expect(container).toMatchSnapshot();
  });

  test('Should call search action with strength parameter', () => {
    const { container } = renderSearchPage(['/search?strength=5']);

    expect(mockSearchHeroAction).toHaveBeenCalledWith({
      name: '',
      strength: '5',
    });

    expect(container).toMatchSnapshot();
  });

  test('Should call search action with both parameter', () => {
    const { container } = renderSearchPage(['/search?name=batman&strength=7']);

    expect(mockSearchHeroAction).toHaveBeenCalledWith({
      name: 'batman',
      strength: '7',
    });

    expect(container).toMatchSnapshot();
  });

  test('Should render herogrid with search results', async () => {
    const mockHeroes = [
      {
        id: '1',
        name: 'Clark Kent',
      } as unknown as Hero,
      {
        id: '2',
        name: 'Bruce Wayne',
      } as unknown as Hero,
    ];

    mockSearchHeroAction.mockResolvedValue(mockHeroes);

    renderSearchPage();

    await waitFor(() => {
      expect(screen.getByText('Clark Kent')).toBeDefined();
      expect(screen.getByText('Bruce Wayne')).toBeDefined();
    });
  });
});
