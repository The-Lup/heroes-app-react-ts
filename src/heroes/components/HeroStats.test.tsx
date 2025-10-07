import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { HeroStats } from './HeroStats';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useHeroSummary } from '../hooks/useHeroSummary';
import type { SummaryInfoResponse } from '../types/summaty-info.response';
import { FavoritesHeroProvider } from '../context/FavoritesHeroContext';

vi.mock('../hooks/useHeroSummary');
const mockUseHeroSummary = vi.mocked(useHeroSummary);

const mockHero = {
  id: '1',
  name: 'Clark Kent',
  slug: 'clark-kent',
  alias: 'Superman',
  powers: [
    'Súper fuerza',
    'Vuelo',
    'Visión de calor',
    'Visión de rayos X',
    'Invulnerabilidad',
    'Súper velocidad',
  ],
  description:
    'El Último Hijo de Krypton, protector de la Tierra y símbolo de esperanza para toda la humanidad.',
  strength: 10,
  intelligence: 8,
  speed: 9,
  durability: 10,
  team: 'Liga de la Justicia',
  image: '1.jpeg',
  firstAppearance: '1938',
  status: 'Active',
  category: 'Hero',
  universe: 'DC',
};

const mockSummaryData: SummaryInfoResponse = {
  totalHeroes: 25,
  strongestHero: {
    id: '1',
    name: 'Clark Kent',
    slug: 'clark-kent',
    alias: 'Superman',
    powers: [
      'Súper fuerza',
      'Vuelo',
      'Visión de calor',
      'Visión de rayos X',
      'Invulnerabilidad',
      'Súper velocidad',
    ],
    description:
      'El Último Hijo de Krypton, protector de la Tierra y símbolo de esperanza para toda la humanidad.',
    strength: 10,
    intelligence: 8,
    speed: 9,
    durability: 10,
    team: 'Liga de la Justicia',
    image: '1.jpeg',
    firstAppearance: '1938',
    status: 'Active',
    category: 'Hero',
    universe: 'DC',
  },
  smartestHero: {
    id: '2',
    name: 'Bruce Wayne',
    slug: 'bruce-wayne',
    alias: 'Batman',
    powers: [
      'Artes marciales',
      'Habilidades de detective',
      'Tecnología avanzada',
      'Sigilo',
      'Genio táctico',
    ],
    description:
      'El Caballero Oscuro de Ciudad Gótica, que utiliza el miedo como arma contra el crimen y la corrupción.',
    strength: 6,
    intelligence: 10,
    speed: 6,
    durability: 7,
    team: 'Liga de la Justicia',
    image: '2.jpeg',
    firstAppearance: '1939',
    status: 'Active',
    category: 'Hero',
    universe: 'DC',
  },
  heroCount: 18,
  villainCount: 7,
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const renderHeroStats = (mockData?: Partial<SummaryInfoResponse>) => {
  if (mockData) {
    mockUseHeroSummary.mockReturnValue({
      data: mockData,
    } as unknown as ReturnType<typeof useHeroSummary>);
  } else {
    mockUseHeroSummary.mockReturnValue({
      data: undefined,
    } as unknown as ReturnType<typeof useHeroSummary>);
  }

  return render(
    <QueryClientProvider client={queryClient}>
      <FavoritesHeroProvider>
        <HeroStats />
      </FavoritesHeroProvider>
    </QueryClientProvider>
  );
};

describe('HeroStats', () => {
  test('Should render component with default values', () => {
    renderHeroStats();

    expect(screen.getByText('Loading...')).toBeDefined();
  });

  test('Should render HeroStats with mock data', () => {
    const { container } = renderHeroStats(mockSummaryData);

    expect(container).toMatchSnapshot();
    expect(screen.getByText('Total Characters')).toBeDefined();
    expect(screen.getByText('Favorites')).toBeDefined();
  });

  test('Should change the percentage of favorites when a hero is added to favorites', () => {
    localStorage.setItem('favorites', JSON.stringify([mockHero]));

    renderHeroStats(mockSummaryData);

    const favPercentageElem = screen.getByTestId('favorite-percentage');
    expect(favPercentageElem.innerHTML).toContain('4.00%');

    const favCountElem = screen.getByTestId('favorite-count');
    expect(favCountElem.innerHTML).toContain('1');
  });
});
