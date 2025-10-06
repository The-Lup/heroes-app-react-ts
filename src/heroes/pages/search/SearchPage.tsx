import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { CustomJumbotron } from '@/components/ui/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadcrumbs } from '@/components/ui/custom/CustomBreadCrumbs';

import { HeroGrid } from '@/heroes/components/HeroGrid';
import { searchHeroAction } from '@/heroes/actions/search-hero.action';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get('name') ?? '';
  const strength = searchParams.get('strength') ?? '';

  const { data: heroes = [] } = useQuery({
    queryKey: ['search', { name, strength }],
    queryFn: () => searchHeroAction({ name, strength }),
    staleTime: 1000 * 60 * 5, //5mins
  });

  return (
    <>
      <CustomJumbotron
        title="Superhero Search"
        description="Discover, explore, and manage your favorite superheroes and villains"
      />

      <CustomBreadcrumbs currentPage="Superhero search" />
      {/* Stats Dashboard */}
      <HeroStats />

      {/* Search and Filter */}
      <SearchControls />

      {/*  */}
      <HeroGrid heroes={heroes} />
    </>
  );
};

export default SearchPage;
