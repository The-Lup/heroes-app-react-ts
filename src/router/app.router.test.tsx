import { describe, expect, test, vi } from 'vitest';
import { appRouter } from './app.router';
import { render, screen } from '@testing-library/react';
import {
  createMemoryRouter,
  Outlet,
  RouterProvider,
  useParams,
} from 'react-router-dom';

vi.mock('@/heroes/layouts/HeroesLayout', () => ({
  HeroesLayout: () => (
    <div data-testid="heroes-layout">
      <Outlet />
    </div>
  ),
}));

vi.mock('@/heroes/pages/home/HomePage', () => ({
  HomePage: () => <div data-testid="home-page"></div>,
}));

vi.mock('@/heroes/pages/hero/HeroPage', () => ({
  HeroPage: () => {
    const { idSlug = '' } = useParams();

    return <div data-testid="hero-page">HeroPage: {idSlug}</div>;
  },
}));

vi.mock('@/heroes/pages/search/SearchPage', () => ({
  default: () => <div data-testid="search-page"></div>,
}));

vi.mock('@/admin/pages/AdminPage', () => ({
  default: () => <div data-testid="admin-page"></div>,
}));

describe('AppRouter', () => {
  test('Should be configured as expected', () => {
    expect(appRouter.routes).toMatchSnapshot();
  });

  test('Should render HomePage at root path', () => {
    const router = createMemoryRouter(appRouter.routes, {
      initialEntries: ['/'],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByTestId('home-page')).toBeDefined();
  });

  test('Should render HeroPage at /heroes/:idSlug path', () => {
    const router = createMemoryRouter(appRouter.routes, {
      initialEntries: ['/heroes/batman'],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByTestId('hero-page').innerHTML).toContain('batman');
  });

  test('Should render search page at /search path', async () => {
    const router = createMemoryRouter(appRouter.routes, {
      initialEntries: ['/search'],
    });

    render(<RouterProvider router={router} />);

    expect(await screen.findByTestId('search-page')).toBeDefined();
  });

  test('Should render search page at /admin path', async () => {
    const router = createMemoryRouter(appRouter.routes, {
      initialEntries: ['/admin'],
    });

    render(<RouterProvider router={router} />);

    expect(await screen.findByTestId('admin-page')).toBeDefined();
  });

  test('Should redirect to home page for unknown routes', () => {
    const router = createMemoryRouter(appRouter.routes, {
      initialEntries: ['/the-moon'],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByTestId('home-page')).toBeDefined();
  });
});
