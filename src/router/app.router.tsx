import { AdminPage } from '@/admin/pages/AdminPage';
import { HeroPage } from '@/heroes/pages/hero/HeroPage';
import { HomePage } from '@/heroes/pages/home/HomePage';
import { SearchPage } from '@/heroes/pages/search/SearchPage';
import { createBrowserRouter } from 'react-router-dom';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/heroes/1',
    element: <HeroPage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
]);
