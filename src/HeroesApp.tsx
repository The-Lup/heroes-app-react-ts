import { RouterProvider } from 'react-router-dom';
import { appRouter } from './router/app.router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FavoritesHeroProvider } from './heroes/context/FavoritesHeroContext';

const queryClient = new QueryClient();

export const HeroesApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesHeroProvider>
        <RouterProvider router={appRouter} />
        <ReactQueryDevtools initialIsOpen={false} />
      </FavoritesHeroProvider>
    </QueryClientProvider>
  );
};
