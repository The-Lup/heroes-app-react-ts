import { CustomJumbotron } from '@/components/ui/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadcrumbs } from '@/components/ui/custom/CustomBreadCrumbs';

export const SearchPage = () => {
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
    </>
  );
};

export default SearchPage;
